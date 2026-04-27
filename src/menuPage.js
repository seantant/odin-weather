import menu from "./menu.json" 

function menuPage() {
    const contentDiv = document.querySelector("#content");
    
    const menuDiv = document.createElement("div");
    menuDiv.id = "menu-div";
    menuDiv.style.height = "100%";
    menuDiv.style.padding = "0 4rem";
    menuDiv.style.display = "grid";
    menuDiv.style.gridTemplateRows = "5rem repeat(3, 1fr)";
    menuDiv.style.gridTemplateColumns = "1fr 1fr 1fr";

    const menuHeader = document.createElement("h1");
    menuHeader.id = "menu-header";
    menuHeader.textContent = "MENU";
    menuHeader.style.textAlign = "center";
    menuHeader.style.paddingTop = "1.5rem";
    menuHeader.style.gridColumn = "span 3";

    menuDiv.appendChild(menuHeader);

    for (let idx in menu) {
        let item = menu[idx];

        let menuCard = document.createElement("div");
        menuCard.classList.add("menu-card");

        let menuCardTitle = document.createElement("h2");
        menuCardTitle.classList.add("menu-card-title");
        menuCardTitle.textContent = item.title;

        let menuCardDesc = document.createElement("p");
        menuCardDesc.classList.add("menu-card-desc");
        menuCardDesc.textContent = item.description;

        menuCard.appendChild(menuCardTitle);
        menuCard.appendChild(menuCardDesc);

        menuDiv.appendChild(menuCard);
    }

    contentDiv.appendChild(menuDiv);
}

export default menuPage;