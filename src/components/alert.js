export default class Alert {
    /**
     * 
     * @param {string} content 
     * @param {HTMLElement} parentElement 
     */
    constructor(content, parentElement) {
        this.content = content;
        this.parentEl = parentElement;
    }

    create() {
        /**
         * 
         * @param {string} tag 
         * @param {string} cls 
         */
        const newEl = (tag, cls) => {
            const el = document.createElement(tag);
            if (cls) el.className = cls;
            return el;
        }

        const container = newEl("div", "w-full text-sm bg-green-400/50 dark:bg-green-600/50 text-gray-800 dark:text-gray-200 border-b border-b-green-500");
        const body = newEl("div", "max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-auto py-2 text-center");
        body.innerHTML = this.content;
        container.appendChild(body);

        this.parentEl.appendChild(container);
    }
}