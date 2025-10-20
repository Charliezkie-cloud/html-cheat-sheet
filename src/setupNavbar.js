import Navbar from "./components/navbar";

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
    ], document.querySelector("#app").querySelector("header")
);
window.openNavbarOffcanvas = Navbar.openNavbarOffcanvas;
window.closeNavbarOffcanvas = Navbar.closeNavbarOffcanvas;
myNavbar.create();