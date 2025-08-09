export const pagination:string = `
<p class="number">
    共<span id="pagination_total"><%=it.total%></span>个
    <div class="vg-paginations-pages pcol-8">

    <button class="vg-paginations-btn  
    <%= it.amount === 1||it.num === 1 ? "disabled" : "" %>
    " id="pagination_front">
        <i class="vg-icon ic-left"></i>
    </button>
    <input type="number" id="pagination_input" type="number" value="<%=it.num%>">
    <button class="vg-paginations-btn  <%= it.amount === 1 ? "disabled" : "" %>" id="pagination_behind">
        <i class="vg-icon ic-right"></i>
    </button>
    </div>
    <p class="number">合计<span id="pagination_amount"><%=it.amount%></span>页</p>
</p>
`