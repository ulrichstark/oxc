use std::{env, path::Path};

use oxc_allocator::Allocator;
use oxc_formatter::{Formatter, FormatterOptions};
use oxc_parser::Parser;
use oxc_span::SourceType;
use oxc_transformer::{TransformOptions, Transformer};

// Instruction:
// create a `test.js`,
// run `cargo run -p oxc_transformer --example transformer`
// or `just watch "run -p oxc_transformer --example transformer"`

fn main() {
    let name = env::args().nth(1).unwrap_or_else(|| "test.js".to_string());
    let path = Path::new(&name);
    let source_text = std::fs::read_to_string(path).expect("{name} not found");
    let allocator = Allocator::default();
    let source_type = SourceType::from_path(path).unwrap();
    let ret = Parser::new(&allocator, &source_text, source_type).parse();

    if !ret.errors.is_empty() {
        for error in ret.errors {
            let error = error.with_source_code(source_text.clone());
            println!("{error:?}");
        }
        return;
    }

    let formatter_options = FormatterOptions::default();
    let program = allocator.alloc(ret.program);
    let printed = Formatter::new(source_text.len(), formatter_options.clone()).build(program);
    println!("Original:\n");
    println!("{printed}");

    let transform_options = TransformOptions::default();
    Transformer::new(&allocator, &transform_options).build(program);
    let printed = Formatter::new(source_text.len(), formatter_options).build(program);
    println!("Transformed:\n");
    println!("{printed}");
}
