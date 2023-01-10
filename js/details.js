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
const url = "https://api.noroff.dev/api/v1/books/" + id;

const idContainer = document.querySelector(".id");
const detailContainer = document.querySelector(".details");

// display the id in a different element to the rest of the properties
idContainer.innerHTML = id;

async function fetchCharacter() {
	try {
		const response = await fetch(url);
		const result = await response.json();
		console.log(result);
		// pass the json to a function that will create the html
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
