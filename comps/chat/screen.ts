export const screen_header = `
<div class="pages-chatgpt-screen-header position-sticky top-0 prow-8 pcol-4 row align-center h-auto">
    <div class="row align-center pcol-16 pt-2">
        <div class="flex1">
            <div class="row">
                <button class="pages-chatgpt-screen-header-toggle row align-center justify-center h-36 w-36 mr-4 border-radius-lg hide" fxtag="showAside">
                    <i class="vg-icon ic-list font-size-18"></i>
                </button>
                <div class="vg-dropdowns-modules dropdowns-inline dropdowns-width-lg mr-8" fxtag="userModel">
                    <div class="vg-dropdowns-title">
                        <div class="hover-bg h-36 pcol-12 prow-6 row align-center font-size-14 border-radius-lg">
                        <p class="mr-4 flex1 text-overflow font-weight-xl">YFHJKSHKJ</p>
                        <i class="vg-icon ic-down ml-8"></i>
                    </div>
                </div>
                <ul class="vg-dropdowns-content hide" fxtag="select_content"></ul>
            </div>
        </div>
    </div>
    <div class="row align-center w-auto">
        <div class="vg-dropdowns-modules dropdowns-inline dropdowns-width-lg">
            <div class="vg-dropdowns-title">
                <a class="hover-bg p-8 w-36 h-36 border-radius-lg">
                    <i class="vg-icon ic-dots font-size-20"></i>
                </a>
            </div>
            <ul class="vg-dropdowns-content hide"></ul>
        </div>
        <div class="vg-dropdowns-modules dropdowns-inline dropdowns-width-lg">
            <div class="vg-dropdowns-title vg-tooltip position-relative" attr-tooltip="对话高级设置" fxtag="select_title">
                <a class="hover-bg p-8 w-36 h-36 border-radius-lg">
                    <i class="vg-icon ic-setting-horizontal font-size-20"></i>
                </a>
            </div>
            <ul class="vg-dropdowns-content hide"></ul>    
        </div>
    </div>
    </div>
</div>
`;
export const screen_body = `
<div class="pages-chatgpt-screen-body text-left flex1 overflow-y set-scrollbar">
    
</div>
`;

export const screen_footer = `
<div class="pages-chatgpt-screen-footer pb-24 h-auto mcol-auto w-100% prow-16 pcol-20">
    <%~ include("chat_input", it) %>
</div>
`;