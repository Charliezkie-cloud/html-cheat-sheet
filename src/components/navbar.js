export default class Navbar {
    /**
     * 
     * @param {{title: string, href: string}[]} items
     * @param {HTMLElement} headerElement 
     */
    constructor(items, headerElement) {
        this.items = items;
        this.headerEl = headerElement;
    }

    create() {
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
        
        this.headerEl.innerHTML = `<nav class="bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
          <div class="max-w-7xl mx-2 md:mx-6 lg:mx-8 xl:mx-auto flex flex-row md:flex-col justify-between items-center md:items-start gap-4 p-4">
            <a class="text-xl sm:text-2xl w-full font-semibold">HTML Cheat Sheet</a>
            <ul class="hidden md:inline-flex flex-wrap gap-4 w-full navbarLinks"></ul>
            <button type="button" onclick="window.openNavbarOffcanvas()" class="block md:hidden bg-transparent hover:bg-gray-300 dark:hover:bg-gray-700 active:bg-gray-300/50 dark:active:bg-gray-700/50 focus:outline-2 focus:outline-offset-2 focus:outline-gray-400 dark:focus:outline-gray-600 rounded-lg h-8 w-10">
              <span class="fa-solid fa-bars text-lg"></span>
            </button>
          </div>
          <div class="hidden md:hidden z-10 left-0 right-0 top-0 bottom-0 backdrop-blur-xs bg-transparent myNavbarOffcanvas">
            <div class="max-w-100 h-full overflow-y-auto p-4 bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
              <div class="flex flex-col gap-4 mb-auto">
                <div class="inline-flex justify-between items-center gap-6">
                  <a class="text-xl sm:text-2xl font-semibold">HTML Cheat Sheet</a>
                  <button type="button" onclick="window.closeNavbarOffcanvas()" class="bg-transparent hover:bg-gray-300 dark:hover:bg-gray-700 active:bg-gray-300/50 dark:active:bg-gray-700/50 focus:outline-2 focus:outline-offset-2 focus:outline-gray-400 dark:focus:outline-gray-600 rounded-lg h-8 w-10">
                    <i class="fa-solid fa-xmark text-lg"></i>
                  </button>
                </div>
                <div>
                  <ul class="flex flex-col gap-4 navbarLinks"></ul>
                </div>
              </div>
            </div>
          </div>
        </nav>`;
        const navbarLinks = Array.from(this.headerEl.querySelectorAll(".navbarLinks"));

        for (const containers of navbarLinks) {
            for (const item of this.items) {
                const li = newEl("li");
                const a = newEl("a", "text-gray-700 dark:text-gray-300 hover:text-rose-500 :hover:text-rose-400 active:text-rose-500/50 :active:text-rose-400/50 focus:underline focus:underline-offset-5", item.title, item.href);
                a.addEventListener("click", () => {
                  window.closeNavbarOffcanvas();
                });
                li.appendChild(a);
                containers.appendChild(li);
            }
        }
    }

    static openNavbarOffcanvas() {
        const offcanvas = document.querySelector(".myNavbarOffcanvas");
        if (offcanvas.classList.contains("hidden")) {
            offcanvas.classList.replace("hidden", "fixed");
            offcanvas.classList.add("animate-(--my-offcanvas-open-animation)");
        }
    }

    static closeNavbarOffcanvas() {
        const offcanvas = document.querySelector(".myNavbarOffcanvas");
        if (offcanvas.classList.contains("fixed")) {
            offcanvas.classList.replace("animate-(--my-offcanvas-open-animation)", "animate-(--my-offcanvas-close-animation)");
            setTimeout(() => {
                offcanvas.classList.replace("fixed", "hidden");
            }, 200);
        }
    }
}