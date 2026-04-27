import "./style.css";
import homePage from "./homePage.js";
import menuPage from "./menuPage.js";
import contactPage from "./contactPage.js";

homePage();

function clearContent() {
    const contentDiv = document.querySelector("#content");

    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.lastChild);
    }
}

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const contactBtn = document.querySelector("#contact");

homeBtn.addEventListener("click", () => {
    clearContent();
    homePage();
});

menuBtn.addEventListener("click", () => {
    clearContent();
    menuPage();
});

contactBtn.addEventListener("click", () => {
    clearContent();
    contactPage();
});