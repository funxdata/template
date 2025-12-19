import { Tpl } from "@funxdata/pages/tplstype";

import { chattpl } from "@/template/chat/index.ts";
import { aside_header,aside_body, aside_footer,screen_header,screen_body,screen_footer } from "@/comps/chat/index.ts";
import { chatinput_tpl } from "@/comps/chat-input/index.ts";

// deno-lint-ignore no-explicit-any
const TplToHtml = (globalThis as any)["TplToHtml"] as Tpl;
TplToHtml.loadTemplate("chat_aside_header",TplToHtml.compile!(aside_header))
TplToHtml.loadTemplate("chat_aside_body",TplToHtml.compile!(aside_body))
TplToHtml.loadTemplate("chat_aside_footer",TplToHtml.compile!(aside_footer))
TplToHtml.loadTemplate("chat_screen_header",TplToHtml.compile!(screen_header))
TplToHtml.loadTemplate("chat_screen_body",TplToHtml.compile!(screen_body))
TplToHtml.loadTemplate("chat_screen_footer",screen_footer)
TplToHtml.loadTemplate("chat_input",TplToHtml.compile!(chatinput_tpl))

const document_app = document.getElementById("app") as HTMLElement;
// const res = await TplToHtml.renderStringAsync(chattpl,{});
document_app.innerHTML = await TplToHtml.renderStringAsync(chattpl,{});

