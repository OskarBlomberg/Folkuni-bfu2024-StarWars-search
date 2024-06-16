const peopleSearchField = document.getElementById("people-search-field");
const peopleSearchBtn = document.getElementById("people-search-btn");
const peopleResults = document.querySelector("#people-results");
const planetsSearchField = document.getElementById("planets-search-field");
const planetsSearchBtn = document.getElementById("planets-search-btn");
const planetsResults = document.querySelector("#planets-results");

peopleSearchBtn.addEventListener("click", async () => {
  if (peopleSearchField.value.trim()) {
    const cArray = await findPerson();
    render(cArray, peopleResults);
  } else {
    peopleResults.innerHTML = "<p>No results found.</p>";
  }
});

planetsSearchBtn.addEventListener("click", () => {
  if (planetsSearchField.value.trim()) {
    findPlanets(
      "https://swapi.dev/api/planets/?search=",
      planetsSearchField.value
    );
  }
});

async function findPerson() {
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
    const cBirth = "Birth year: " + character.birth_year;
    const cGender = "Gender: " + character.gender;
    const cHeight = "Height: " + character.height;
    const cHairColor = "Hair colour: " + character.hair_color;
    const cEyes = "Eye colour: " + character.eye_color;
    const cSkin = "Skin colour: " + character.skin_color;
    const homeWorld = await findPlanets(character.homeworld, "");
    const cHome = "Homeworld: " + homeWorld.name;

    const cArray = [
      cName,
      cBirth,
      cGender,
      cHeight,
      cHairColor,
      cEyes,
      cSkin,
      cHome,
    ];
    return cArray;
  }
}

async function findPlanets(base, qString) {
  planetsResults.innerHTML = "";
  const baseUrl = base;
  const queryStringName = qString;
  const response = await fetch(baseUrl + queryStringName);
  planetsSearchField.value = "";
  const data = await response.json();
  //Om datan länkar direkt till en planet får vi datan
  let planet = data;

  // men om vi gör en sökning får vi en array (om sökningen ger resultat)
  if (data.results) {
    if (data.results.length > 0) {
      planet = data.results[0];
    } else {
      planetsResults.innerHTML = "<p>No results found.</p>";
    }
  }
  console.log(planet);

  const planetArray = storePlanet(planet);

  render(planetArray, planetsResults);
  return planet;
}

function storePlanet(planet) {
  const pName = "Name: " + planet.name;
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
  return cArray;
}

function render(array, section) {
  for (let i = 0; i < array.length; i++) {
    let newP = document.createElement("p");
    newP.innerText = array[i];
    section.appendChild(newP);
  }
}
