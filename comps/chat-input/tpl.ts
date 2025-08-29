export const chatinput_tpl = `
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
                <button class="row align-center justify-center w-36 h-36 border-radius-max position-relative vg-tooltip tooltip-position-top">
                    <i class="vg-icon ic-microphone font-size-20"></i>
                </button>
            </div>
        </div>
    </div>
`