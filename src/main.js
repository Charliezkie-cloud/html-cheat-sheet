import "./style.css";
import "https://kit.fontawesome.com/a9bae01479.js";
import "./setupNavbar.js";
import "./setupSection.js";

window.toggleEditorTheme = () => {
    if (localStorage.getItem("isDark") == "true") {
        localStorage.setItem("isDark", false);
        console.log("Theme has been set to light.");
    } else {
        localStorage.setItem("isDark", true);
        console.log("Theme has been set to dark.");
    }

}

console.log("Hello world!");