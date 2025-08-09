export const chattpl:string= `
<div class="pages-chatgpt-home row align-center h-100vh color-gray-900">
<div class="vg-aside-chatgpt h-100%" fxtag="asideBox">
    <div class="vg-aside-chatgpt-content prow-10 row rowcolumn">
    <div class="vg-aside-chatgpt-header row align-center h-auto pcol-10" fxtag="newChat">
    <a class="vg-aside-chatgpt-header-left flex1 row align-center h-100% pcol-8 border-radius-lg text-left">
        <div class="mr-6 row align-left w-auto">
        <img width="28" src="https://book.funxdata.com/public/img/webmanage/logo-sm.png" alt="logo">
    </div>
    <div class="flex1 font-size-14 font-weight-xl text-overflow white-space-nowrap">新对话</div>
    <div class="row align-center justify-center w-auto">
        <i class="vg-icon ic-edit font-size-18"></i>
    </div>
    </a>
    <button class="vg-aside-chatgpt-header-right row align-center justify-center h-36 w-36 ml-4 border-radius-lg" fxtag="hideAside">
    <i class="vg-icon ic-list font-size-18"></i>
    </button>
    </div>
    <div class="vg-aside-chatgpt-body row rowcolumn flex1 overflow-y">
        <div class="pcol-8 mt2 mb-8 h-auto">
            <div class="row align-center">
                <div class="row align-center justify-center prow-8 pl-12 w-auto">
                    <i class="vg-icon ic-search font-size-16"></i>
                </div>
                <input class="row prow-6 pl-10 pr-16 font-size-14" placeholder="搜索">
                </div>
            </div>
        <div class="flex1 overflow-y set-scrollbar mrow-8 pl-8 text-left"></div>
        </div>
    <div class="vg-aside-chatgpt-footer h-auto pcol-10">
    <button class="vg-aside-chatgpt-footer-button row align-center text-left pcol-14 prow-12 border-radius-xl">
    <div class="vg-avatar border-radius-max mr-12">
    <img src="https://book.funxdata.com/public/img/funxdata/website/feature-03.png" alt>
    </div>
<div class="text-overflow white-space-nowrap"></div>
</button>
</div>
</div>
</div>
<audio id="audioElement hide" fxtag="audioElement"></audio>
<div class="pages-chatgpt-screen row rowcolumn flex1 h-100% bg-gray-50">
<div class="pages-chatgpt-screen-header position-sticky top-0 prow-8 pcol-4 row align-center h-auto">
<div class="row align-center pcol-16 pt-2">
<div class="flex1">
    <div class="row">
        <button class="pages-chatgpt-screen-header-toggle row align-center justify-center h-36 w-36 mr-4 border-radius-lg hide" fxtag="showAside">
            <i class="vg-icon ic-list font-size-18"></i>
        </button>
        <div class="vg-dropdowns-modules dropdowns-inline dropdowns-width-lg mr-8" fxtag="userModel">
        <div class="vg-dropdowns-title" fxtag="select_title">
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
    <div class="vg-dropdowns-modules dropdowns-inline dropdowns-width-lg">
        <div class="vg-dropdowns-title">
            <div class="hover-bg p-6 cursor-pointer w-36 h-36 border-radius-lg">
                <div class="vg-avatar avatar-size-24 border-radius-max">
                    <img src="https://book.funxdata.com/public/img/funxdata/website/feature-03.png" alt>
                </div>
            </div>
        </div>
        <ul class="vg-dropdowns-content hide"></ul>
        </div>
        </div>
        </div>
        </div>
        <div class="pages-chatgpt-screen-body text-left flex1 overflow-y set-scrollbar">
        <div class="row rowcolumn">
        <div>
        <div class="messages-content line-height-xxl"></div>
        </div>
        </div>
        </div>
        <div class="pages-chatgpt-screen-footer pb-24 h-auto mcol-auto w-100% prow-16 pcol-20"><div>
        </div>
        <div class="row align-end gap-12 text-left">
            <div class="border-radius-max mb-6">
                <button class="row align-center justify-center w-36 h-36 bg-white border-radius-max vg-tooltip tooltip-position-top" attr-tooltip="更多" fxtag="addFiles">
                <i class="vg-icon ic-plus font-size-18"></i>
                </button>
            </div>
            <div class="pages-chatgpt-screen-footer-input row rowcolumn justify-end w-auto flex1 prow-6 pl-16 pr-8 bg-white">
                <div class="files-box row flex-wrap mt-10 mcol-4 mb-4"></div>
                <div class="row align-end w-auto flex1 ml-4">
                    <div class="value-text-scrollbar row align-center w-auto flex1 overflow-y set-scrollbar h-36 pr-6 text-left font-size-16 color-gray-900 text-left">
                        <p class="value-text w-100% word-break-all line-height-xl outline-none cursor-text" contenteditable="true" attr-placeholder="输入消息">
                        </div>
                        <div>
                    <button class="row align-center justify-center w-36 h-36 border-radius-max position-relative vg-tooltip tooltip-position-top" attr-tooltip="录音" fxtag="microphone">
                        <i class="vg-icon ic-microphone font-size-20"></i>
                    </button>
                </div>
            </div>
        </div>
    <div class="border-radius-max mb-6">
        <button class="row align-center justify-center w-36 h-36 bg-white border-radius-max vg-tooltip tooltip-position-top" attr-tooltip="呼叫" fxtag="headphones">
            <i class="vg-icon ic-headphones font-size-20"></i>
        </button>
        <button class="row align-center justify-center w-36 h-36 bg-white border-radius-max vg-tooltip tooltip-position-top hide" attr-tooltip="发送消息" fxtag="send">
            <i class="vg-icon ic-biu font-size-20"></i>
        </button>
        </div>
    </div>
</div>
</div>
</div>
`