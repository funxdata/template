import { select_option } from "@/comps/select/index.ts";
import { selecttpltype } from "@/comps/select/types.ts";
import { Tpl } from "@funxdata/pages/tplstype";
// deno-lint-ignore no-explicit-any
const TplToHtml = (globalThis as any)["TplToHtml"] as Tpl;
const data:selecttpltype = {
    option_uid:"", 
    field_name:"name", 
    placeholder:"测试选项",     // 提示词
    option_data:[
        {uuid:"abc",name:"hello"},
        {uuid:"abc1",name:"hello1"},
        {uuid:"abc2",name:"hello2"},
        {uuid:"abc3",name:"hello3"},
        {uuid:"abc4",name:"hello4"},
    ],   // 选项内容
}
const document_app = document.getElementById("app") as HTMLElement;
select_option(document_app,data,(uuid:string)=>{
    console.log(uuid)
})
