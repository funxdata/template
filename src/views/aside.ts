export const aside_html = `
    <a class="Title" href="/ui">FunXdataUI</a>
    <% it.tabledata.forEach(function(rowitem){ %>
    <div class="Section"><%=rowitem.title%></div>
    <% rowitem.child.forEach(function(routinfo){ %>
        <a class="Example" href="<%=routinfo.path%>"><%=routinfo.title%></a>
    <% }) }) %>
`