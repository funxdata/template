export const aside_header = `
    <div class="vg-aside-chatgpt-header row align-center h-auto pcol-10">
        <div class="chat-aside-logo">
            <div class="vg-aside-chatgpt-header-left flex1 row align-center h-100% pcol-8 border-radius-lg text-left">
                <div class="mr-6 row align-left w-auto">
                    <img width="28" src="https://book.funxdata.com/public/img/webmanage/logo-sm.png" alt="logo">
                </div>
            </a>
            <button class="vg-aside-chatgpt-header-right row align-center justify-center h-36 w-36 ml-4 border-radius-lg">
                <i class="vg-icon ic-list font-size-18"></i>
            </button>
        </div>
        <ul class="flex flex-col mt-4 space-y-1 px-2">
            <li>
                <div class="row align-center justify-center prow-8 pl-12 w-auto">
                    <i class="vg-icon ic-search font-size-16"></i><span>新对话框</span>
                </div>
            </li>
            <li>
                <div class="row align-center justify-center prow-8 pl-12 w-auto">
                    <i class="vg-icon ic-search font-size-16"></i><span>搜索</span>
                </div> 
            </li>
            <li>
                <div class="row align-center justify-center prow-8 pl-12 w-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
                    </svg>
                    <span>Library</span>
                </div>
            </li>
        </ul>
    </div>
`
export const aside_body = `
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
`

export const aside_footer = `
    <div class="vg-aside-chatgpt-footer h-auto pcol-10">
        <button class="vg-aside-chatgpt-footer-button row align-center text-left pcol-14 prow-12 border-radius-xl">
            <div class="vg-avatar border-radius-max mr-12">
                <img src="https://book.funxdata.com/public/img/funxdata/website/feature-03.png" alt>
            </div>
            <div class="text-overflow white-space-nowrap"></div>
        </button>
    </div>
`