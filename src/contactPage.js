function contactPage() {
    const contentDiv = document.querySelector("#content");

    const contactDiv = document.createElement("div");
    contactDiv.id = "contact-div";
    contactDiv.style.height = "100%";
    contactDiv.style.padding = "0 4rem";
    contactDiv.style.display = "grid";
    contactDiv.style.gridTemplateColumns = "1fr 1fr";
    contactDiv.style.gridTemplateRows = "5rem 1fr";
    
    const contactHeader = document.createElement("h1");
    contactHeader.id = "contact-header";
    contactHeader.textContent = "Contact us!";
    contactHeader.style.padding = "1.5rem";
    contactHeader.style.textAlign = "center";
    contactHeader.style.gridColumn = "span 2";

    const contactForm = document.createElement("form");
    contactForm.id = "contact-form";

    const formName = document.createElement("input");
    formName.type = "input";
    formName.name = "name";
    formName.id = "name";
    formName.placeholder = "Name";
    formName.size = "40";
    contactForm.appendChild(formName);
    contactForm.appendChild(document.createElement("br"));

    const formEmail = document.createElement("input");
    formEmail.type = "email";
    formEmail.name = "email";
    formEmail.id = "email";
    formEmail.placeholder = "Email";
    formEmail.size = "40";
    contactForm.appendChild(formEmail);
    contactForm.appendChild(document.createElement("br"));

    const formSubject = document.createElement("input");
    formSubject.type = "text";
    formSubject.name = "subject";
    formSubject.id = "subject";
    formSubject.placeholder = "Subject";
    formSubject.size = "40";
    contactForm.appendChild(formSubject);
    contactForm.appendChild(document.createElement("br"));

    const formMessage = document.createElement("textarea");
    formMessage.name = "message";
    formMessage.id = "message";
    formMessage.cols = "40";
    formMessage.rows = "5";
    formMessage.placeholder = "This form is not real. Do not submit anything to it."
    contactForm.appendChild(formMessage);
    contactForm.appendChild(document.createElement("br"));

    const formSubmit = document.createElement("input");
    formSubmit.id = "submit";
    formSubmit.type = "submit";
    contactForm.appendChild(formSubmit);

    const contactInfo = document.createElement("div");
    contactInfo.id = "contact-info";
    contactInfo.style.gap = "16px";

    const contactAddress = document.createElement("p");
    contactAddress.classList.add("contact-info");
    contactAddress.textContent = "1234 Address St";
    contactInfo.appendChild(contactAddress);

    const contactCity = document.createElement("p");
    contactCity.classList.add("contact-info");
    contactCity.textContent = "City, State";
    contactInfo.appendChild(contactCity);
    
    const contactPhone = document.createElement("p");
    contactPhone.classList.add("contact-info");
    contactPhone.textContent = "(123)-456-9999";
    contactInfo.appendChild(contactPhone);

    const contactEmail = document.createElement("p");
    contactEmail.classList.add("contact-info");
    contactEmail.textContent = "FakeEmail@email.com";
    contactInfo.appendChild(contactEmail);

    contactDiv.appendChild(contactHeader);
    contactDiv.appendChild(contactForm);
    contactDiv.appendChild(contactInfo);

    contentDiv.appendChild(contactDiv);
}

export default contactPage;