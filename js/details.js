// get the query string
const queryString = document.location.search;

const params = new URLSearchParams(queryString);

// get the id from the query string
const id = params.get("id");

// if the id is null (doesn't exist) redirect to the home page
if (id === null) {
    location.href = "/";
}

// create the url by addin the id to the end
const url = "https://breakingbadapi.com/api/characters/" + id;

const idContainer = document.querySelector(".id");
const detailContainer = document.querySelector(".details");

// display the id in a different element to the rest of the properties
idContainer.innerHTML = id;

async function fetchCharacter() {
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        const details = result[0];
        // pass the json to a function that will create the html
        createHtml(details);
    } catch (error) {
        console.log(error);
        detailContainer.innerHTML = error;
    }
}

fetchCharacter();

function createHtml(details) {
    detailContainer.innerHTML = `<h1>${details.name}</h1>   
                                 <div>Occupation: <b>${details.occupation[0]}</b></div>`;
}
