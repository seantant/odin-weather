import burgerImage from "./images/burger.jpg";

function homePage() {
    const contentDiv = document.querySelector("#content");

    const homeDiv = document.createElement("div");
    homeDiv.id = "home-div"
    homeDiv.style.height = "100%";
    homeDiv.style.display = "flex";

    const image = document.createElement("img");
    image.id = "home-img"
    image.src = burgerImage;
    image.style.height = "100%";

    const textDiv = document.createElement("div");
    textDiv.id = "home-text";
    textDiv.style.width = "100%";
    textDiv.style.display = "flex";
    textDiv.style.flexDirection = "column";
    textDiv.style.justifyContent = "center";
    textDiv.style.alignItems = "center";

    const textHeading = document.createElement("h1");
    textHeading.id = "home-heading";
    textHeading.textContent = "BORgER";
    textHeading.style.fontSize = "5rem";
    textHeading.style.fontWeight = "bold";

    const textParagraph = document.createElement("p");
    textParagraph.id = "home-paragraph";
    textParagraph.textContent = "pls eat here";
    textParagraph.style.fontSize = "3rem";

    textDiv.appendChild(textHeading);
    textDiv.appendChild(textParagraph);

    homeDiv.appendChild(image);
    homeDiv.appendChild(textDiv);

    contentDiv.appendChild(homeDiv);
}

export default homePage;