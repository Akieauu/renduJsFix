let urlChocolat = "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/chocolatier.json";

const hero = document.getElementById("section-hero");
const why = document.getElementById("section-why");
const collection = document.getElementById("section-collection");
const services = document.getElementById("section-services");
const clients = document.getElementById("section-clients");


fetch(urlChocolat)
    .then(response => response.json())
    .then(data => {

        console.log(data);

        let sectionHero = displaySectionHero(data);
        hero.appendChild(sectionHero);

        let sectionWhy = displaySectionWhy(data);
        why.appendChild(sectionWhy);

        let sectionCollection = displayCollection(data);
        collection.appendChild(sectionCollection);

        let sectionClients = displayClients(data);
        clients.appendChild(sectionClients);

    });

function displaySectionHero(data) {

    let dDivHero = document.createElement("div");
    dDivHero.classList.add("d-flex");
    dDivHero.classList.add("center");
    
    let divHero = document.createElement("div");
    divHero.classList.add("text-align");
    divHero.classList.add("marginHero");


    let titleSectionHero = document.createElement("h1");
    titleSectionHero.classList.add("title-section-hero");
    titleSectionHero.textContent = "Des desserts à en perdre la tête";

    let paraSectionHero = document.createElement("p");
    paraSectionHero.classList.add("para-section-hero");
    paraSectionHero.textContent = data.slogan;

    let buttonHero = document.createElement("button");
    buttonHero.classList.add("btn");
    buttonHero.textContent = data.bouton;

    dDivHero.appendChild(divHero);
    divHero.appendChild(titleSectionHero);
    divHero.appendChild(paraSectionHero);
    divHero.appendChild(buttonHero);

    return dDivHero;
}

function displaySectionWhy(data) {

    let dDivWhy = document.createElement("div");
    dDivWhy.classList.add("d-flex");
    dDivWhy.classList.add("j-content");

    let divWhy = document.createElement("div");
    divWhy.classList.add()

    let paraWhy = document.createElement("p");
    paraWhy.classList.add("para-why");
    paraWhy.textContent = "pourquoi";

    let titleWhy = document.createElement("h3");
    titleWhy.classList.add("title-why");
    titleWhy.textContent = "Ce qui nous définit";

    let sdParaWhy = document.createElement("p");
    sdParaWhy.classList.add("sdPara-why");
    sdParaWhy.textContent = "Qualité sans égale dans chaque détail";

    let sdDivWhy = document.createElement("div");
    sdDivWhy.classList.add("d-flex");

    data.listeBeneficesClients.forEach((benefice, index) => {
        let thrdDivWhy = document.createElement("div");
        thrdDivWhy.classList.add("cards");

        let thrdTitleWhy = document.createElement("h3");
        thrdTitleWhy.classList.add("thrdTitle-Why");
        thrdTitleWhy.textContent = `Avantage ${index + 1}`;

        let beneficesList = document.createElement("p");
        beneficesList.textContent = benefice;

        sdDivWhy.appendChild(thrdDivWhy);
        thrdDivWhy.appendChild(thrdTitleWhy);
        thrdDivWhy.appendChild(beneficesList);
        
    });

    dDivWhy.appendChild(divWhy);
    divWhy.appendChild(paraWhy);
    divWhy.appendChild(titleWhy);
    divWhy.appendChild(sdParaWhy);
    divWhy.appendChild(sdDivWhy);
    


    return dDivWhy;
}

function displayCollection(data) {
    let divCollection = document.createElement("div");
    divCollection.classList.add("d-flex");
    divCollection.classList.add("flex")

    let dDivCollection = document.createElement("div");
    dDivCollection.classList.add();

    let paraCollection = document.createElement("p");
    paraCollection.classList.add("para-collection");
    paraCollection.textContent = "Collection";

    let titleCollection = document.createElement("h3");
    titleCollection.classList.add("title-collection");
    titleCollection.textContent = "Desserts";

    let sdParaCollection = document.createElement("p");
    sdParaCollection.classList.add("sdPara-Collection");
    sdParaCollection.textContent = "Les desserts que vous allez adorer cette saison";

    let divForEach = document.createElement("div");
    divForEach.classList.add("d-flex");

    divCollection.appendChild(dDivCollection);
    dDivCollection.appendChild(divForEach);
    dDivCollection.appendChild(paraCollection);
    dDivCollection.appendChild(titleCollection);
    dDivCollection.appendChild(sdParaCollection);

    data.produits.forEach(produit => {
        let divProduits = document.createElement("div");
        divProduits.classList.add("cards");
        divProduits.classList.add("text-align");
        
        let imgProduitsCollection = document.createElement("img");
        imgProduitsCollection.classList.add("img");
        imgProduitsCollection.src = produit["image-url"];
        imgProduitsCollection.alt = "Dessert";

        let titleProduitsCollection = document.createElement("h3");
        titleProduitsCollection.classList.add("titleProduits-collection");
        titleProduitsCollection.textContent = produit.titre;

        let paraProduitsCollection = document.createElement("p");
        paraProduitsCollection.classList.add("paraProduits-collection");
        paraProduitsCollection.textContent = produit.presentation;

        divForEach.appendChild(divProduits);
        divCollection.appendChild(divProduits);
        divProduits.appendChild(imgProduitsCollection);
        divProduits.appendChild(titleProduitsCollection);
        divProduits.appendChild(paraProduitsCollection);
        
    });

    return divCollection;
}

// function displayServices() {
//     let divService = document.createElement("div");
//     divService.classList.add("div-service");

//     let paraService = document.createElement("p");
//     paraService.classList.add("para-service");
//     paraService.textContent = "Services";

//     let titleService = document.createElement("h3");
//     titleService.classList.add("title-service");
//     titleService.textContent = "Les desserts"
// }

function displayClients(data) {

    let divClients = document.createElement("div");
    divClients.classList.add("d-flex");
    divClients.classList.add("flex");

    let dDivClients = document.createElement("div");
    dDivClients.classList.add("text-align");

    let titleClients = document.createElement("h3");
    titleClients.classList.add("title-clients");
    titleClients.textContent = "Vos avis comptent";

    let paraClients = document.createElement("p");
    paraClients.classList.add("para-clients");
    paraClients.textContent = "Ce que nos clients ont à vous dire";

    let sdDivClients = document.createElement("div");
    sdDivClients.classList.add("d-flex");
    sdDivClients.classList.add("text-align");


    divClients.appendChild(dDivClients);
    dDivClients.appendChild(titleClients);
    dDivClients.appendChild(paraClients);
    divClients.appendChild(sdDivClients);

    data.clients.forEach(client => {

        let thrdDivClients = document.createElement("div");
        thrdDivClients.classList.add();

        let occasionClients = document.createElement("h3");
        occasionClients.classList.add("occasion-clients");
        occasionClients.textContent = client.typePrestation;

        let noteClients = document.createElement("p");
        noteClients.classList.add("note-clients");
        noteClients.textContent = `${client.note}/5`;

        let paraCommentaire = document.createElement("p");
        paraCommentaire.classList.add();
        paraCommentaire.textContent = client.commentaire;

        let nameClients = document.createElement("h3");
        nameClients.classList.add();
        nameClients.textContent = client.nom;

        thrdDivClients.appendChild(occasionClients);
        thrdDivClients.appendChild(noteClients);
        thrdDivClients.appendChild(paraCommentaire);
        thrdDivClients.appendChild(nameClients);
        sdDivClients.appendChild(thrdDivClients);
    });
    
    return divClients;

}