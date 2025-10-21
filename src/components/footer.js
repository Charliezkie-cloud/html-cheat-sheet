export default class Footer {
    /**
     * 
     * @param {{cols: number, items: {title: string, href: string}[]}} pageContents 
     * @param {HTMLElement} parentElement 
     */
    constructor(pageContents, parentElement) {
        this.pageContents = pageContents;
        this.parentEl = parentElement
    }

    create() {
        const cols = this.pageContents.cols;
        const items = this.pageContents.items;

        /**
         * 
         * @param {string} tag 
         * @param {string} cls 
         * @param {string} text 
         * @param {string} href 
         */
        const newEl = (tag, cls, text, href) => {
            const el = document.createElement(tag);
            if (cls) el.className = cls;
            if (text) el.innerHTML = text;
            if (href) el.href = href;
            return el;
        }

        this.parentEl.innerHTML = `<nav class="bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
            <div class="max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-auto py-6">
                <div class="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <a class="text-xl sm:text-2xl w-full font-semibold" href="#">HTML Cheat Sheet</a>
                        <p class="opacity-75 text-sm my-2">By Charles Henry M. Tinoy Jr.</p>
                        <p class="opacity-75 text-xs">&copy; 2025</p>
                    </div>
                    <div>
                        <h1 class="text-lg sm:text-xl font-semibold mb-4">Page Contents</h1>
                        <div class="grid grid-cols-${cols} footerPageContents">

                        </div>
                    </div>
                </div>
            </div>
        </nav>`;

        const footerPageContents = this.parentEl.querySelector(".footerPageContents");
        const itemsPerCol = Math.ceil(items.length / cols);
        for (let i = 0; i < cols; i++) {
            const ul = newEl("ul", "flex flex-col gap-2");
            const start = i * itemsPerCol;
            const colItems = items.slice(start, start + itemsPerCol)

            for (const item of colItems) {
                const li = newEl("li");
                const a = newEl("a", "text-gray-700 dark:text-gray-300 hover:text-rose-500 dark:hover:text-rose-400 active:text-rose-500/50 dark:active:text-rose-400/50 focus:underline focus:underline-offset-4", item.title, item.href);
                li.appendChild(a);
                ul.appendChild(li);
            }

            footerPageContents?.appendChild(ul);
        }
    }
}