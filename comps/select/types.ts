export type selecttpltype = {
    option_uid?:string,     // 选中的编号
    field_name:string,      // 需要渲染的类名
    placeholder:string,     // 提示词
    option_data:[object],   // 选项内容
};
export type callback=(uuid:string)=>void;
export type select_option_type = (node:HTMLElement,cfg:selecttpltype,cb:callback)=>void;