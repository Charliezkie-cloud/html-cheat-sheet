import Navbar from "./components/navbar";
import Section from "./components/section.js";
import Alert from "./components/alert.js";
import Footer from "./components/footer.js";
import { items } from "./cheatsheet.js";

const App = document.querySelector("#app");

const myNavbar = new Navbar(
    [
        { "title": "Basic Tags", "href": "#basic-tags" },
        { "title": "Formatting", "href": "#formatting" },
        { "title": "Body attributes", "href": "#body-attributes" },
        { "title": "Lists", "href": "#lists" },
        { "title": "Text Tags", "href": "#text-tags" },
        { "title": "Graphical elements", "href": "#graphical-elements" },
        { "title": "Links", "href": "#links" },
        { "title": "Forms", "href": "#forms" },
        { "title": "HTML5 input tag attributes", "href": "#html5-input-tag-attributes" },
        { "title": "Tables", "href": "#tables" },
        { "title": "Table attributes", "href": "#table-attributes" }
    ], App.querySelector("header").querySelector(".navContainer")
);
window.openNavbarOffcanvas = Navbar.openNavbarOffcanvas;
window.closeNavbarOffcanvas = Navbar.closeNavbarOffcanvas;
myNavbar.create();

const myAlert = new Alert(`<p class="inline-flex flex-wrap items-center gap-1">Try out my
        <a href="https://charliezkie-cloud.github.io/html-live-editor" target="_blank" class="font-semibold hover:underline hover:underline-offset-4">
            HTML Live Editor
        </a>
        <i class="fa-solid fa-arrow-up-right-from-square"></i>
    </p>`, App.querySelector(".alertContainer"));
myAlert.create();

for (const item of items) {
    const mySection = new Section(item, App.querySelector("main"));
    mySection.create()
}

const myFooter = new Footer({
    cols: 3,
    items: [
        { "title": "Basic Tags", "href": "#basic-tags" },
        { "title": "Formatting", "href": "#formatting" },
        { "title": "Body attributes", "href": "#body-attributes" },
        { "title": "Lists", "href": "#lists" },
        { "title": "Text Tags", "href": "#text-tags" },
        { "title": "Graphical elements", "href": "#graphical-elements" },
        { "title": "Links", "href": "#links" },
        { "title": "Forms", "href": "#forms" },
        { "title": "HTML5 input tag attributes", "href": "#html5-input-tag-attributes" },
        { "title": "Tables", "href": "#tables" },
        { "title": "Table attributes", "href": "#table-attributes" }
    ]
}, App.querySelector("footer"))
myFooter.create();