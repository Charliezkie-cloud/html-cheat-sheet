import { basicSetup } from "codemirror"
import { EditorView } from "@codemirror/view"
import { EditorState } from "@codemirror/state"
import { html } from "@codemirror/lang-html"
import { basicLight } from "@fsegurai/codemirror-theme-basic-light"
import { oneDark } from "@codemirror/theme-one-dark"
import { Compartment } from "@codemirror/state";

export default class Section {
    /**
     * 
     * @param {{section: string, items: {tag: string, description: string}[]}} section 
     * @param {HTMLElement} mainElement
     */
    constructor(section, mainElement) {
        this.data = section;
        this.mainEl = mainElement;
    }

    create() {
        /**
         * 
         * @param {string} tag 
         * @param {string} cls 
         * @param {string} text 
         */
        const newEl = (tag, cls, text, id) => {
            const el = document.createElement(tag);
            if (id) el.id = id;
            if (cls) el.className = cls;
            if (text) el.innerText = text;
            return el;
        }

        const section = newEl("section", "max-w-7xl mx-0 md:mx-6 lg:mx-8 xl:mx-auto bg-gray-200/50 dark:bg-gray-900/50 text-gray-800 dark:text-gray-200 p-6 rounded-none sm:rounded-xl border mb-4 border-gray-300 dark:border-gray-700");
        const title = newEl("h1", "text-xl sm:text-2xl font-semibold mb-4", this.data.section, this.data.section.toLowerCase().replace(" ", "-"))
        const ul = newEl("ul", "flex flex-col gap-4");

        for (const item of this.data.items) {
            const li = newEl("li", "grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 items-center gap-2");
            const editorContainer = newEl("div");

            new EditorView({
                doc: item.tag,
                parent: editorContainer,
                extensions: [
                    basicSetup,
                    html(),
                    EditorState.readOnly.of(true),
                    new Compartment().of(localStorage.getItem("isDark") == "true" ? oneDark : basicLight)
                ]
            });

            const p = newEl("p", null, item.description);

            li.appendChild(editorContainer);
            li.appendChild(p);
            ul.appendChild(li);
        }

        section.appendChild(title);
        section.appendChild(ul);

        this.mainEl?.appendChild(section);
    }
}