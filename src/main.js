import "./style.css";
import "./contents.js";

const App = document.querySelector("#app");

window.addEventListener("load", () => {
    if (localStorage.getItem("isDark") == "true") {
        document.documentElement.classList.replace("light", "dark");
        for (const item of App.querySelectorAll(".themeToggle")) {
            item.innerHTML = '<i class="fa-solid fa-sun text-lg"></i>';
        }
    } else {
        for (const item of App.querySelectorAll(".themeToggle")) {
            item.innerHTML = '<i class="fa-solid fa-moon text-lg"></i>';
        }
        document.documentElement.classList.replace("dark", "light");
    }
});

/**
 * 
 * @param {HTMLElement} e 
 */
function toggleTheme(e) {
    if (localStorage.getItem("isDark") == "true") {
        localStorage.setItem("isDark", false);
        console.log("Theme has been set to light.");
        e.innerHTML = '<i class="fa-solid fa-moon text-lg"></i>';
    } else {
        localStorage.setItem("isDark", true);
        console.log("Theme has been set to dark.");
        e.innerHTML = '<i class="fa-solid fa-sun text-lg"></i>';
    }
    window.location.reload();
}

window.toggleTheme = toggleTheme;

console.log("Hello world!");