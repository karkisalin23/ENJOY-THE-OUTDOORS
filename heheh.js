let parkTypeList = document.getElementById("parkSearchOptions");
let byLocationButton = document.getElementById("searchByLocation");
let byParkTypeButton = document.getElementById("searchByType");
let showAllButton = document.getElementById("showAll");

parkTypeList.style.display = "none";

function handleFilterChange(filterFunction) {
  listOptions();

  parkTypeList.style.display = "block";

  parkTypeList.addEventListener("change", function () {
    filterFunction(nationalParksArray);
  });

  cardContainer.innerHTML = "";
}

byLocationButton.addEventListener("change", function () {
  handleFilterChange(displayParkState);
});

byParkTypeButton.addEventListener("change", function () {
  handleFilterChange(displayParkType);
});

showAllButton.addEventListener("change", function () {
  cardContainer.innerHTML = "";
  parkTypeList.style.display = "none";
  displayAll(nationalParksArray);
});

function listOptions() {
  parkTypeList.innerHTML = "";
  parkTypeList.appendChild(selectOneOption);

  // Assuming you have an array of options, modify this accordingly
  for (const option of parkTypesArray) {
    let optionElement = new Option(option);
    parkTypeList.appendChild(optionElement);
  }
}

function displayParkState(parksArray) {
  cardContainer.innerHTML = "";

  for (const park of parksArray) {
    if (park.State == parkTypeList.value) {
      createCard(park);
    }
  }
}

function displayParkType(parksArray) {
  cardContainer.innerHTML = "";

  for (const park of parksArray) {
    let lowerCaseLocation = park.LocationName.toLowerCase();
    if (lowerCaseLocation.indexOf(parkTypeList.value.toLowerCase()) !== -1) {
      createCard(park);
    }
  }
}

function displayAll(parksArray) {
  cardContainer.innerHTML = "";

  for (const park of parksArray) {
    createCard(park);
  }
}

// ... (the rest of your code)
