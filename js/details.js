const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id")

if (id === null) {
    location.href = "/";
}

const url = "https://api.noroff.dev/api/v1/books/" + id;

const idContainer = document.querySelector(".id");
const detailContainer = document.querySelector(".details");

idContainer.innerHTML = id;

async function fetchCharacter() {
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        createHtml(result);
    } catch (error) {
        console.log(error);
        detailContainer.innerHTML = error;
    }
}

fetchCharacter();

function createHtml(details) {
    detailContainer.innerHTML = `<h1>${details.title}</h1>   
                                 <div>Author: <b>${details.author}</b></div>`;
}