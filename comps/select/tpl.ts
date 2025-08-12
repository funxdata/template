export const selecttpl = 
`
<div class="vg-dropdowns-modules dropdowns-width-lg mr-8">
<div class="vg-dropdowns-title select_title">
 <% if (it.option_uid != "") { %>
    <% it.option_data.forEach(function(item){ %>
        <% if (it.option_uid == item.uuid) { %>
        <button class="vg-btn btn-block btn-size-sm" data-uuid="<%=item.uuid%>">
            <p class="mr-4 flex1 text-overflow"><%=item[it.field_name]%></p>
            <i class="vg-icon ic-down"></i>
        </button>
        <% } %>
    <% }) } else {  %>
    <button class="vg-btn btn-block btn-size-sm">
        <p class="mr-4 flex1 text-overflow"><%=it.placeholder%></p>
        <i class="vg-icon ic-down"></i>
    </button>
<% } %>
</div>
<ul class="vg-dropdowns-content select-content hide">
    <li class="vg-dropdowns-li">重新选择</li>
    <% it.option_data.forEach(function(item){ %>
        <li class="vg-dropdowns-li"  data-uuid="<%=item.uuid%>"><%=item[it.field_name]%></li>
    <% }) %>
</ul>
</div>
`; 