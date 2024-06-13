const peopleSearchField = document.getElementById("people-search-field");
const peopleSearchBtn = document.getElementById("people-search-btn");
const peopleResults = document.querySelector("#people-results");
const planetsSearchField = document.getElementById("planets-search-field");
const planetsSearchBtn = document.getElementById("planets-search-btn");
const planetsResults = document.querySelector("#planets-results");

peopleSearchBtn.addEventListener("click", findPerson);
planetsSearchBtn.addEventListener("click", findplanets);

async function findPerson() {
  if (peopleSearchField.value.trim()) {
    peopleResults.innerHTML = "";
    const baseUrl = "https://swapi.dev/api/people/?search=";
    const queryStringName = peopleSearchField.value;
    const response = await fetch(baseUrl + queryStringName);
    peopleSearchField.value = "";
    const data = await response.json();

    if (data.results.length > 0) {
      const character = data.results[0];
      console.log(character);

      const cName = "Name: " + character.name;
      console.log(cName);
      const cBirth = "Birth year: " + character.birth_year;
      const cGender = "Gender: " + character.gender;
      const cHeight = "Height: " + character.height;
      const cHairColor = "Hair colour: " + character.hair_color;
      const cEyes = "Eye colour: " + character.eye_color;
      const cSkin = "Skin colour: " + character.skin_color;

      const cArray = [
        cName,
        cBirth,
        cGender,
        cHeight,
        cHairColor,
        cEyes,
        cSkin,
      ];

      render(cArray, peopleResults);
    } else {
      peopleResults.innerHTML = "<p>No results found.</p>";
    }
  }
}

async function findplanets() {
  if (planetsSearchField.value.trim()) {
    planetsResults.innerHTML = "";
    const baseUrl = "https://swapi.dev/api/planets/?search=";
    const queryStringName = planetsSearchField.value;
    const response = await fetch(baseUrl + queryStringName);
    planetsSearchField.value = "";
    const data = await response.json();

    if (data.results.length > 0) {
      const planet = data.results[0];
      console.log(planet);

      const pName = "Name: " + planet.name;
      console.log(pName);
      const pDiameter = "Diameter: " + planet.diameter;
      const pPop = "Population: " + planet.population;
      const pClimate = "Climate: " + planet.climate;
      const pGravity = "Gravity: " + planet.gravity;
      const pTerrain = "Terrain: " + planet.terrain;
      const pRotation = "Rotation period: " + planet.rotation_period;
      const pYear = "Orbital period: " + planet.orbital_period;

      const cArray = [
        pName,
        pDiameter,
        pPop,
        pClimate,
        pGravity,
        pTerrain,
        pRotation,
        pYear,
      ];

      render(cArray, planetsResults);
    } else {
      planetsResults.innerHTML = "<p>No results found.</p>";
    }
  }
}

function render(array, section) {
  for (let i = 0; i < array.length; i++) {
    let newP = document.createElement("p");
    newP.innerText = array[i];
    section.appendChild(newP);
  }
}

/* Hämta alla saker man vill ha och stoppa dem i en lista/array
rendera en lista med alla saker, t.ex. "Name: Obi-Wan"
Kan nog göras via en for loop eller en forEach */

/* 
inputBtn.addEventListener("click", function () {
  const inputValue = inputEl.value.trim();

  if (inputValue && isValidURL(inputValue)) {
    myLeads.push(inputValue);
    inputEl.value = "";
    render(myLeads);
  } else {
    alert("Please enter a valid URL");
  }
});

function render(leads) {
  ulEl.textContent = "";

  leads.forEach(lead => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = lead;
    a.textContent = lead;
    a.target = '_blank';

    li.appendChild(a);
    ulEl.appendChild(li);
  });
}

function isValidURL(string) {
  try {
    new URL(string);
    return true;
    } catch (_) {
    return false;
   }
}

inputEl.addEventListener("input", function () {
  inputBtn.disabled = !inputEl.value.trim();
});
*/
