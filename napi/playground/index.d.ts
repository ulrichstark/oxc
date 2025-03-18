/* auto-generated by NAPI-RS */
/* eslint-disable */
export declare class Oxc {
  astJson: string
  ir: string
  controlFlowGraph: string
  symbolsJson: string
  scopeText: string
  codegenText: string
  codegenSourcemapText?: string
  formattedText: string
  prettierFormattedText: string
  prettierIrText: string
  constructor()
  getDiagnostics(): Array<OxcError>
  getComments(): Array<Comment>
  /**
   * # Errors
   * Serde serialization error
   */
  run(sourceText: string, options: OxcOptions): void
}

export interface Comment {
  type: 'Line' | 'Block'
  value: string
  start: number
  end: number
}

export interface ErrorLabel {
  message?: string
  start: number
  end: number
}

export interface OxcCodegenOptions {
  indentation?: number
  enableTypescript?: boolean
  enableSourcemap?: boolean
}

export interface OxcCompressOptions {
  booleans: boolean
  dropDebugger: boolean
  dropConsole: boolean
  evaluate: boolean
  joinVars: boolean
  loops: boolean
  typeofs: boolean
}

export interface OxcControlFlowOptions {
  verbose?: boolean
}

export interface OxcError {
  severity: Severity
  message: string
  labels: Array<ErrorLabel>
  helpMessage?: string
}

export interface OxcLinterOptions {

}

export interface OxcMinifierOptions {
  whitespace?: boolean
  mangle?: boolean
  compress?: boolean
  compressOptions?: OxcCompressOptions
}

export interface OxcOptions {
  run?: OxcRunOptions
  parser?: OxcParserOptions
  linter?: OxcLinterOptions
  transformer?: OxcTransformerOptions
  codegen?: OxcCodegenOptions
  minifier?: OxcMinifierOptions
  controlFlow?: OxcControlFlowOptions
}

export interface OxcParserOptions {
  allowReturnOutsideFunction?: boolean
  preserveParens?: boolean
  allowV8Intrinsics?: boolean
  sourceType?: string
  sourceFilename?: string
}

export interface OxcRunOptions {
  syntax?: boolean
  lint?: boolean
  format?: boolean
  prettierFormat?: boolean
  prettierIr?: boolean
  transform?: boolean
  typeCheck?: boolean
  scope?: boolean
  symbol?: boolean
}

export interface OxcTransformerOptions {
  target?: string
  isolatedDeclarations?: boolean
}

export declare const enum Severity {
  Error = 'Error',
  Warning = 'Warning',
  Advice = 'Advice'
}
