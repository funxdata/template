export const chattpl:string= `
<div class="pages-chatgpt-home row align-center h-100vh color-gray-900">
   <div class="vg-aside-chatgpt h-100%">
    <div class="vg-aside-chatgpt-content prow-10 row rowcolumn">
        <%~ include("docs_aside_header", it) %>
    </div>
   </div>
   <div class="pages-chatgpt-screen row rowcolumn flex1 h-100% bg-gray-50">
    <%~ include("docs_aside", it) %>
    <%~ include("docs_main", it) %>
   </div>
</div>
`