const ulContainer = document.querySelector(".list-view-container");
const buttonSubmit = document.querySelector(".button-submit");
const form = document.querySelector(".form");
var isValuesFilled = false;
var actualNameValue = "";
var actualEmailValue = "";

const nameInput = document.querySelector(".input-name");
const emailInput = document.querySelector(".input-email");

const PORT = 8000;
const baseURL = `http://localhost:${PORT}`;
const route = "people";

getAllData();

form.addEventListener("submit", submitPerson);

async function getAllData() {
  try {
    const response = await fetch(`${baseURL}/${route}`);

    const dataJson = await response.json();

    displayDataToList(dataJson);
  } catch (err) {
    console.log(`Ocorreu um erro de conexão: ${err.message}`);
  }
}

function displayDataToList(data) {
  data.forEach((person) => {
    const liElement = document.createElement("li");
    const nameElement = document.createElement("h4");
    const spanEmailElement = document.createElement("span");

    liElement.className = "list-item";
    nameElement.className = "person-name";
    spanEmailElement.className = "person-email";

    nameElement.innerText = person.name;
    spanEmailElement.innerText = person.email;

    ulContainer.appendChild(liElement);
    liElement.appendChild(nameElement);
    liElement.appendChild(spanEmailElement);
  });
}

async function submitPerson() {
  actualNameValue = nameInput.value;
  actualEmailValue = emailInput.value;

  console.log("Iniciando envio de dados.");

  try {
    const response = await fetch(`${baseURL}/${route}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: actualNameValue,
        email: actualEmailValue,
      }),
    });

    if (!response.ok) {
      console.log("Algo deu errado. Verifique os campos.");
    }

    actualEmailValue = "";
    actualEmailValue = "";
  } catch (err) {
    console.log(`Algo deu errado: ${err.message}`);
  }
}
