export interface Node {
    type: string;
    loc: SourceLocation;
  }
  
  export interface SourceLocation {
    source: string;
    start: Position;
    end: Position;
  }
  
  export interface Position {
    line: number;
    column: number;
  }
  
  export interface Program extends Node {
    body: Statement[];
    blockParams: string[];
  }
  
  export interface Statement extends Node {}
  
  export interface MustacheStatement extends Statement {
    type: 'MustacheStatement';
    path: SubExpression | PathExpression | Literal;
    params: Expression[];
    hash: Hash;
    escaped: boolean;
    strip: StripFlags;
  }
  
  export interface Decorator extends MustacheStatement { }
  
  export interface BlockStatement extends Statement {
    type: 'BlockStatement';
    path: PathExpression;
    params: Expression[];
    hash: Hash;
    program: Program;
    inverse: Program;
    openStrip: StripFlags;
    inverseStrip: StripFlags;
    closeStrip: StripFlags;
  }
  
  export interface DecoratorBlock extends BlockStatement { }
  
  export interface PartialStatement extends Statement {
    type: 'PartialStatement';
    name: PathExpression | SubExpression;
    params: Expression[];
    hash: Hash;
    indent: string;
    strip: StripFlags;
  }
  
  export interface PartialBlockStatement extends Statement {
    type: 'PartialBlockStatement';
    name: PathExpression | SubExpression;
    params: Expression[];
    hash: Hash;
    program: Program;
    openStrip: StripFlags;
    closeStrip: StripFlags;
  }
  
  export interface ContentStatement extends Statement {
    type: 'ContentStatement';
    value: string;
    original: StripFlags;
  }
  
  export interface CommentStatement extends Statement {
    type: 'CommentStatement';
    value: string;
    strip: StripFlags;
  }
  
  export interface Expression extends Node {}
  
  export interface SubExpression extends Expression {
    type: 'SubExpression';
    path: SubExpression | PathExpression;
    params: Expression[];
    hash: Hash;
  }
  
  export interface PathExpression extends Expression {
    type: 'PathExpression';
    data: boolean;
    depth: number;
    parts: (string | SubExpression)[];
    head: SubExpression | string;
    tail: string[];
    original: string;
  }
  
  export interface Literal extends Expression {}
  export interface StringLiteral extends Literal {
    type: 'StringLiteral';
    value: string;
    original: string;
  }
  
  export interface BooleanLiteral extends Literal {
    type: 'BooleanLiteral';
    value: boolean;
    original: boolean;
  }
  
  export interface NumberLiteral extends Literal {
    type: 'NumberLiteral';
    value: number;
    original: number;
  }
  
  export interface UndefinedLiteral extends Literal {
    type: 'UndefinedLiteral';
  }
  
  export interface NullLiteral extends Literal {
    type: 'NullLiteral';
  }
  
  export interface Hash extends Node {
    type: 'Hash';
    pairs: HashPair[];
  }
  
  export interface HashPair extends Node {
    type: 'HashPair';
    key: string;
    value: Expression;
  }
  
  export interface StripFlags {
    open: boolean;
    close: boolean;
  }
  
  export interface helpers {
    helperExpression(node: Node): boolean;
    scopeId(path: PathExpression): boolean;
    simpleId(path: PathExpression): boolean;
  }

declare namespace Handlebars {
  export interface TemplateDelegate<T = any> {
      (context: T, options?: RuntimeOptions): string;
  }

  export type Template<T = any> = TemplateDelegate<T>|string;

  export interface RuntimeOptions {
      partial?: boolean;
      depths?: any[];
      helpers?: { [name: string]: Function };
      partials?: { [name: string]: Template };
      decorators?: { [name: string]: Function };
      data?: any;
      blockParams?: any[];
      allowCallsToHelperMissing?: boolean;
      allowedProtoProperties?: { [name: string]: boolean };
      allowedProtoMethods?: { [name: string]: boolean };
      allowProtoPropertiesByDefault?: boolean;
      allowProtoMethodsByDefault?: boolean;
  }

  export interface HelperOptions {
      fn: TemplateDelegate;
      inverse: TemplateDelegate;
      hash: Record<string, any>;
      data?: any;
  }

  export interface HelperDelegate {
      (context?: any, arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any, options?: HelperOptions): any;
  }
  export interface HelperDeclareSpec {
      [key: string]: HelperDelegate;
  }

  export interface ParseOptions {
    srcName?: string;
    ignoreStandalone?: boolean;
  }
  
  export function parse(input: string, options?: ParseOptions): Program;
  export function parseWithoutProcessing(input: string, options?: ParseOptions): Program;


  export function registerHelper(name: string, fn: HelperDelegate): void;
  export function registerHelper(name: HelperDeclareSpec): void;
  export function unregisterHelper(name: string): void;

  export function registerPartial(name: string, fn: Template): void;
  export function registerPartial(spec: { [name: string]: Template }): void;
  export function unregisterPartial(name: string): void;

  // TODO: replace Function with actual signature
  export function registerDecorator(name: string, fn: Function): void;
  export function unregisterDecorator(name: string): void;

  export function K(): void;
  export function createFrame(object: any): any;
  export function blockParams(obj: any[], ids: any[]): any[];
  export function log(level: number, obj: any): void;

  export function compile<T = any>(input: any, options?: CompileOptions): HandlebarsTemplateDelegate<T>;
  export function precompile(input: any, options?: PrecompileOptions): TemplateSpecification;
  export function template<T = any>(precompilation: TemplateSpecification): HandlebarsTemplateDelegate<T>;

  export function create(): typeof Handlebars;

  export const escapeExpression: typeof Utils.escapeExpression;
  //export const Utils: typeof hbs.Utils;
  export const logger: Logger;
  export const templates: HandlebarsTemplates;
  export const helpers: { [name: string]: HelperDelegate };
  export const partials: { [name: string]: any };
  // TODO: replace Function with actual signature
  export const decorators: { [name: string]: Function };

  export const VERSION: string;

  export function noConflict(): typeof Handlebars;

  export class Exception {
      constructor(message: string, node?: Node);
      description: string;
      fileName: string;
      lineNumber?: any;
      endLineNumber?: any;
      message: string;
      name: string;
      number: number;
      stack?: string;
      column?: any;
      endColumn?: any;
  }

  export class SafeString {
      constructor(str: string);
      toString(): string;
      toHTML(): string;
  }

  export namespace Utils {
      export function escapeExpression(str: string): string;
      export function createFrame(object: any): any;
      export function blockParams(obj: any[], ids: any[]): any[];
      export function isEmpty(obj: any) : boolean;
      export function extend(obj: any, ...source: any[]): any;
      export function toString(obj: any): string;
      export function isArray(obj: any): boolean;
      export function isFunction(obj: any): boolean;
      export function isMap(obj: any): boolean;
      export function isSet(obj: any): boolean;
  }

//   export namespace AST {
//       export const helpers: hbs.AST.helpers;
//   }

  export interface ICompiler {
      accept(node: Node): void;
      Program(program: Program): void;
      BlockStatement(block: BlockStatement): void;
      PartialStatement(partial: PartialStatement): void;
      PartialBlockStatement(partial: PartialBlockStatement): void;
      DecoratorBlock(decorator: DecoratorBlock): void;
      Decorator(decorator: Decorator): void;
      MustacheStatement(mustache: MustacheStatement): void;
      ContentStatement(content: ContentStatement): void;
      CommentStatement(comment?: CommentStatement): void;
      SubExpression(sexpr: SubExpression): void;
      PathExpression(path: PathExpression): void;
      StringLiteral(str: StringLiteral): void;
      NumberLiteral(num: NumberLiteral): void;
      BooleanLiteral(bool: BooleanLiteral): void;
      UndefinedLiteral(): void;
      NullLiteral(): void;
      Hash(hash: Hash): void;
  }

  export class Visitor implements ICompiler {
      accept(node: Node): void;
      acceptKey(node: Node, name: string): void;
      acceptArray(arr: Expression[]): void;
      Program(program: Program): void;
      BlockStatement(block: BlockStatement): void;
      PartialStatement(partial: PartialStatement): void;
      PartialBlockStatement(partial: PartialBlockStatement): void;
      DecoratorBlock(decorator: DecoratorBlock): void;
      Decorator(decorator: Decorator): void;
      MustacheStatement(mustache: MustacheStatement): void;
      ContentStatement(content: ContentStatement): void;
      CommentStatement(comment?: CommentStatement): void;
      SubExpression(sexpr: SubExpression): void;
      PathExpression(path: PathExpression): void;
      StringLiteral(str: StringLiteral): void;
      NumberLiteral(num: NumberLiteral): void;
      BooleanLiteral(bool: BooleanLiteral): void;
      UndefinedLiteral(): void;
      NullLiteral(): void;
      Hash(hash: Hash): void;
  }


  export interface ResolvePartialOptions {
    name: string;
    helpers?: { [name: string]: Function };
    partials?: { [name: string]: HandlebarsTemplateDelegate };
    decorators?: { [name: string]: Function };
    data?: any;
  }

  export namespace VM {
    /**
     * @deprecated
     */
    export function resolvePartial<T = any>(partial: HandlebarsTemplateDelegate<T> | undefined, context: any, options: ResolvePartialOptions): HandlebarsTemplateDelegate<T>;
  }
}

/**
* Implement this interface on your MVW/MVVM/MVC views such as Backbone.View
**/
export interface HandlebarsTemplatable {
  template: HandlebarsTemplateDelegate;
}

// NOTE: for backward compatibility of this typing
export type HandlebarsTemplateDelegate<T = any> = Handlebars.TemplateDelegate<T>;

export interface HandlebarsTemplates {
  [index: string]: HandlebarsTemplateDelegate;
}

export interface TemplateSpecification{}

// for backward compatibility of this typing
export type RuntimeOptions = Handlebars.RuntimeOptions;

export interface CompileOptions {
  data?: boolean;
  compat?: boolean;
  knownHelpers?: KnownHelpers;
  knownHelpersOnly?: boolean;
  noEscape?: boolean;
  strict?: boolean;
  assumeObjects?: boolean;
  preventIndent?: boolean;
  ignoreStandalone?: boolean;
  explicitPartialContext?: boolean;
}

export type KnownHelpers = {
  [name in BuiltinHelperName | CustomHelperName]: boolean;
};

export type BuiltinHelperName =
  "helperMissing"|
  "blockHelperMissing"|
  "each"|
  "if"|
  "unless"|
  "with"|
  "log"|
  "lookup";

export type CustomHelperName = string;

export interface PrecompileOptions extends CompileOptions {
  srcName?: string;
  destName?: string;
}


export interface Logger {
  DEBUG: number;
  INFO: number;
  WARN: number;
  ERROR: number;
  level: number;

  methodMap: { [level: number]: string };

  log(level: number, obj: string): void;
}

export type CompilerInfo = [number/* revision */, string /* versions */];

export default Handlebars;