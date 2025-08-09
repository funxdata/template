export const pagination:string = `
<p class="number">
    共<span id="<%=it.paginationtpl.total%>"></span>个
    <div class="vg-paginations-pages pcol-8">
    <button class="vg-paginations-btn" id="pagination_front">
        <i class="vg-icon ic-left"></i>
    </button>
    <input type="number" id="pagination_input" type="number">
    <button class="vg-paginations-btn" id="pagination_behind">
        <i class="vg-icon ic-right"></i>
    </button>
    </div>
    <p class="number">合计<span id="<%=it.paginationtpl.amount%>"></span>页</p>
</p>
`