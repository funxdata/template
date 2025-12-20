import type { PagesRouterInfo } from "@funxdata/pages/routtype";
import { routerinfo } from "./data/router.ts"
import { init_web_app } from "./route/init.ts"
// deno-lint-ignore no-explicit-any
const GlobalPagesRouter = (globalThis as any)["GlobalPagesRouter"] as PagesRouterInfo;

init_web_app();
// router info
for (let index = 0; index < routerinfo.length; index++) {
    const allinfo = routerinfo[index];
    const rout = GlobalPagesRouter.on(allinfo.path, allinfo.title);
    if (allinfo.url != "") {
        if (rout != null) {
            rout.loadjs = allinfo.url
        }
    }
}
GlobalPagesRouter.init("/docs");