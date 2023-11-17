"use strict";
console.log(nationalParksArray, locationsArray, parkTypesArray);

const locationList = document.getElementById("locationList");
const parkTypeList = document.getElementById("parkTypeList");
const parkTable = document.getElementById("parkTable");
const byLocationRadio = document.getElementById("byLocation");
const byTypeRadio = document.getElementById("byType");

function loadOptions(array, selectElement) {
  for (const item of array) {
    let option = document.createElement("option");
    option.textContent = item;
    option.value = item;
    selectElement.appendChild(option);
  }
}

function filterParksByLocation(selectedLocation) {
  parkTable.innerHTML = "";

  const filteredParks = nationalParksArray.filter(
    (park) => park.State === selectedLocation
  );

  displayParkInformation(filteredParks);
}

function filterParksByType(selectedType) {
  console.log("Selected Type:", selectedType);

  // Clear existing table
  parkTable.innerHTML = "";

  // Filter parks based on the selected type
  const filteredParks = nationalParksArray.filter(
    (park) =>
      parkTypesArray.includes(selectedType) &&
      park.LocationName.includes(selectedType)
  );

  // Display information directly in the table
  displayParkInformation(filteredParks);
}

function displayParkInformation(parks) {
  const table = document.createElement("table");
  table.style.fontSize = "16px";

  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  // Create table header
  const headerRow = document.createElement("tr");
  const headers = [
    { text: "National Park", width: "150px" },
    { text: "Address", width: "200px" },
    { text: "City", width: "100px" },
    { text: "State", width: "80px" },
    { text: "Zip Code", width: "80px" },
    { text: "Phone", width: "120px" },
    { text: "Fax", width: "120px" },
    { text: "Latitude", width: "100px" },
    { text: "Longitude", width: "100px" },
  ];

  for (const headerInfo of headers) {
    const headerCell = document.createElement("th");
    headerCell.textContent = headerInfo.text;
    headerCell.style.width = headerInfo.width;
    headerRow.appendChild(headerCell);
  }

  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Table rows with park information
  for (const park of parks) {
    const row = document.createElement("tr");

    const cells = [
      park.LocationName,
      park.Address,
      park.City,
      park.State,
      park.ZipCode,
      park.Phone,
      park.Fax,
      park.Latitude,
      park.Longitude,
    ];

    for (const cellText of cells) {
      const cell = document.createElement("td");
      cell.textContent = cellText;
      row.appendChild(cell);
    }

    tbody.appendChild(row);
  }

  table.appendChild(tbody);
  parkTable.appendChild(table);
}

loadOptions(locationsArray, locationList);
loadOptions(parkTypesArray, parkTypeList);

function searchTypeChanged() {
  if (byLocationRadio.checked) {
    locationList.style.display = "block";
  } else {
    locationList.style.display = "none";
  }
  if (byTypeRadio.checked) {
    parkTypeList.style.display = "block";
  } else {
    parkTypeList.style.display = "none";
  }
}

byLocationRadio.onchange = searchTypeChanged;
byTypeRadio.onchange = searchTypeChanged;
searchTypeChanged();

// Combine event listeners for byLocationRadio and byTypeRadio
byLocationRadio.onchange = function () {
  locationList.style.display = "block";
  parkTypeList.style.display = "none";
  filterParksByLocation(locationList.value);
};

// Assign onchange event directly to locationList
locationList.onchange = function () {
  const selectedLocation = locationList.value;
  filterParksByLocation(selectedLocation);
};

byTypeRadio.onchange = function () {
  locationList.style.display = "none";
  parkTypeList.style.display = "block";
  filterParksByType(parkTypeList.value);
};

// Assign onchange event directly to parkTypeList
parkTypeList.onchange = function () {
  const selectedParkType = parkTypeList.value;
  filterParksByType(selectedParkType);
};
