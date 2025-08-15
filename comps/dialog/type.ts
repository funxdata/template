// deno-lint-ignore no-explicit-any
export type Callback = (value:any)=>void
export type dialogtpl ={
    title?:string,
    placeholder:string,
    value:string|number
}
export type DialogBox = (node:HTMLElement,cfg:dialogtpl,sure_cb:Callback,change_cb:Callback|null)=>void;