import { select_option } from "@/comps/select/index.ts";
import { selecttpltype } from "@/comps/select/types.ts";
import { DialogPreview } from "@/comps/dialog/index.ts"
import { Tpl } from "@funxdata/pages/tplstype";

// deno-lint-ignore no-explicit-any
// const TplToHtml = (globalThis as any)["TplToHtml"] as Tpl;
// const data:selecttpltype = {
//     option_uid:"", 
//     field_name:"name", 
//     placeholder:"测试选项",     // 提示词
//     option_data:[
//         {uuid:"abc",name:"hello"},
//         {uuid:"abc1",name:"hello1 long story long story long story long storyv long story long story long story"},
//         {uuid:"abc2",name:"hello2  long story long story"},
//         {uuid:"abc3",name:"hello3 long story long story long story long story long story long story"},
//         {uuid:"abc4",name:"hello4 long story long story long story"},
//     ],   // 选项内容
// }
export const init_img_preview= ()=>{
    const document_app = document.getElementById("app") as HTMLElement;
    document_app.innerHTML = `
    <div>
        <img class="vg-img" data-original="images/tibet-1.jpg" src="https://fengyuanchen.github.io/viewerjs/images/thumbnails/tibet-1.jpg">
    </div>
    `
    const imgs = document.querySelectorAll('img.vg-img');
    imgs.forEach(img => {
        img.onclick =()=>{
            console.log(".....")
            DialogPreview(img)
        }
    });
}
