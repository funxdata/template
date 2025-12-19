export const dialog =`
<section class="vg-dialog-box">
    <div class="vg-dialog">
        <div class="vg-dialog-header"><%=it.title%></div>
        <div class="vg-dialog-body">
            <div class="vg-input">
                <input placeholder="<%=it.placeholder%>" type="<%=it.type%>" value="<%=it.value%>">
                <p class="error-tip"></p>
            </div>
        </div>
        <div class="vg-dialog-footer">
            <button class="vg-btn btn-type-brand" id="sure" disable>确定</button>
            <button class="vg-btn" id="cancel">取消</button>
        </div>
    </div>
</section>`;

export const dialog_preview =`
    <section class="vg-dialog-box">
    <div class="vg-dialog">
        <div class="vg-dialog-header"></div>
        <div class="vg-dialog-body">
            <img src="<%=it.url%>">
        </div>
        <div class="vg-dialog-footer">
            <button class="vg-btn" id="cancel">取消</button>
        </div>
    </div>
</section>
`
