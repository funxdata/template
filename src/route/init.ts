// 初始化项目
import { main_header_html, main_containers_html, main_menu_html } from "../views/main.ts"
export const init_web_app = () => {
    const app_main = document.getElementById("app") as HTMLElement;
    app_main.innerHTML = main_header_html + main_containers_html;
}