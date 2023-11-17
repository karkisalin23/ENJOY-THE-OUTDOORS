"use strict";

const mountainList = document.getElementById("mountainList");

function initializeMountainList() {
  for (const mountain of mountainsArray) {
    const option = document.createElement("option");
    option.value = mountain.name;
    option.textContent = mountain.name;
    mountainList.appendChild(option);
  }

  mountainList.onchange = function () {
    const selectedMountain = mountainList.value;
    displayMountainDetails(selectedMountain);
  };
}

initializeMountainList();

function displayMountainDetails(selectedMountain) {
  let selectedMountainData;
  for (const mountain of mountainsArray) {
    if (mountain.name === selectedMountain) {
      selectedMountainData = mountain;
      break;
    }
  }

  if (selectedMountainData) {
    const mountainInformation = document.getElementById("mountainDetails");

    mountainInformation.innerHTML = "";

    let mountainName = document.createElement("h2");
    mountainName.textContent = selectedMountainData.name;

    let mountainImage = document.createElement("img");
    mountainImage.src = `images/${selectedMountainData.img}`;
    mountainImage.alt = `An image of ${selectedMountainData.name}`;

    let elevation = document.createElement("p");
    elevation.textContent = `Elevation: ${selectedMountainData.elevation} feet`;

    let effort = document.createElement("p");
    effort.textContent = `Effort: ${selectedMountainData.effort}`;

    let description = document.createElement("p");
    description.textContent = selectedMountainData.desc;

    mountainInformation.appendChild(mountainName);
    mountainInformation.appendChild(mountainImage);
    mountainInformation.appendChild(elevation);
    mountainInformation.appendChild(effort);
    mountainInformation.appendChild(description);
  }
}
