"use strict";

document.getElementById("index").addEventListener("click", function () {
  window.location.href = "index.html";
});

document.getElementById("mountains").addEventListener("click", function () {
  window.location.href = "mountains.html";
});

document.getElementById("national-park").addEventListener("click", function () {
  window.location.href = "national-park.html";
});

document
  .getElementById("mountains-container")
  .addEventListener("click", function () {
    // Redirect to the mountains page
    window.location.href = "mountains.html";
  });

document
  .getElementById("nationalPark-container")
  .addEventListener("click", function () {
    // Redirect to the mountains page
    window.location.href = "national-park.html";
  });
