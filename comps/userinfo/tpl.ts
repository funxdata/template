export const userinfo_tpl = `
    <div class="vg-aside-chatgpt-footer h-auto pcol-10">
        <a href="<%=it.href%>"  class="vg-aside-chatgpt-footer-button row align-center text-left pcol-14 prow-12 border-radius-xl">
            <div class="vg-avatar border-radius-max mr-12">
                <img src="<%=it.avatar%>" alt>
            </div>
            <div class="text-overflow white-space-nowrap">
                <div class="font-size-14 font-weight-600">
                    <%=it.name%>
                </div>
            </div>
        </a>
    </div>
`