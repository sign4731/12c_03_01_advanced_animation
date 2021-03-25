"use strict";

const features = {
  saddle: false,
  grips: false,
  wheels: false,
};

const forbiddenFeature = {
  sport_grip: false,
};

const addOns = {
  basket: false,
  computer: false,
  lights: false,
};

window.addEventListener("DOMContentLoaded", init);

function init() {
  loadSVG();
  frameColorSelection();
  metalColorSelection();
  document.querySelectorAll(".feature").forEach((feature) => feature.addEventListener("click", displayFeatures));
  document.querySelectorAll("#select_addons div").forEach((feature) => feature.addEventListener("click", displayAddOns));
}

async function loadSVG() {
  let response = await fetch("img/main_bike1.svg");
  let mySVG = await response.text();
  document.querySelector("#product_view #svg").innerHTML = mySVG;
}

function frameColorSelection() {
  document.querySelectorAll("#frame_color div").forEach((button) =>
    button.addEventListener("click", () => {
      stel_farve.style.fill = button.dataset.color;
      removeChosenClassFromFrame();
      button.classList.add("chosen");
    })
  );
}

function metalColorSelection() {
  document.querySelectorAll("#metal_color div").forEach((button) =>
    button.addEventListener("click", () => {
      metal_farve.style.fill = button.dataset.color;
      removeChosenClassFromMetal();
      button.classList.add("chosen");
    })
  );
}

function removeChosenClassFromMetal() {
  document.querySelectorAll("#metal_color div").forEach((button) => button.classList.remove("chosen"));
}
function removeChosenClassFromFrame() {
  document.querySelectorAll("#frame_color div").forEach((button) => button.classList.remove("chosen"));
}

function displayAddOns(event) {
  const target = event.currentTarget;
  const add_on = target.dataset.feature;
  const sort = target.dataset.sort;

  console.log(add_on);

  if (!addOns[add_on]) {
    if (!forbiddenFeature.sport_grip && add_on === "computer") {
      alert("Only possible to put computer on racer grip!");
    } else {
      addOns[add_on] = true;
      console.log(`${add_on} is put on`);
      document.querySelector(`#product_view [data-feature=${add_on}]`).classList.remove("hide");
      const featureElement = createFeatureElement(add_on, sort);
      document.querySelector("#selected_addons ul").append(featureElement);
      displayPutOnAnimation(add_on, featureElement);
    }
  } else {
    addOns[add_on] = false;
    console.log(`${add_on} is removed`);
    document.querySelector(`#product_view [data-feature=${add_on}]`).classList.add("hide");
    const featureElementToRemove = document.querySelector(`#selected_addons ul [data-feature=${add_on}]`);
    displayRemoveAnimation(add_on, featureElementToRemove);
  }
}

function displayFeatures(event) {
  const target = event.currentTarget;
  const feature = target.dataset.feature;
  const sort = target.dataset.sort;
  console.log(sort);

  // const sorts = Object.keys(features);
  // console.log(sorts);

  if (!features[sort]) {
    if (feature === "sport_grip") {
      forbiddenFeature.sport_grip = true;
      console.log("sport grips is true");
    }
    // forbiddenFeature.sport_grip = false;
    // console.log("sport grips is false");
    features[sort] = true;
    console.log(`${feature} is chosen`);
    document.querySelector(`[data-feature=${feature}]`).classList.remove("hide");

    // Animations
    const featureElement = createFeatureElement(feature, sort);
    document.querySelector("#selected_gear ul").append(featureElement);

    const start = document.querySelector(`#options [data-feature=${feature}]`).getBoundingClientRect();
    const end = featureElement.getBoundingClientRect();

    const diffX = start.x - end.x;
    const diffY = start.y - end.y;
    featureElement.style.setProperty("--diffX", diffX);
    featureElement.style.setProperty("--diffY", diffY);
    featureElement.classList.add("animate-feature-in");
  } else {
    if (feature === "sport_grip") {
      forbiddenFeature.sport_grip = true;
      console.log("sport grips is true");
    } else if (addOns.computer) {
      removeComputer();
    }

    // forbiddenFeature.sport_grip = false;
    // console.log("sport grips is false");

    document.querySelectorAll(`#product_view [data-sort=${sort}]`).forEach((displayed_feature) => {
      displayed_feature.classList.add("hide");
      console.log(`all ${sort} is removed`);
    });
    document.querySelector(`[data-feature=${feature}]`).classList.remove("hide");

    // Animations
    const featureElement = createFeatureElement(feature, sort);
    document.querySelector("#selected_gear ul").append(featureElement);

    const start = document.querySelector(`#options [data-feature=${feature}]`).getBoundingClientRect();
    const end = featureElement.getBoundingClientRect();

    const diffX = start.x - end.x;
    const diffY = start.y - end.y;
    featureElement.style.setProperty("--diffX", diffX);
    featureElement.style.setProperty("--diffY", diffY);
    featureElement.classList.add("animate-feature-in");
    const elementToRemove = document.querySelector(`#selected_features [data-sort=${sort}]`);
    console.log(elementToRemove);
    elementToRemove.classList.add("animate-feature-out");
    elementToRemove.addEventListener("animationend", () => elementToRemove.remove());
  }
}

function createFeatureElement(feature, sort) {
  const li = document.createElement("li");
  li.dataset.feature = feature;
  li.dataset.sort = sort;
  const img = document.createElement("img");
  img.src = `img/${feature}_icon.png`;
  li.append(img);

  return li;
}

function displayRemoveAnimation(add_on, featureElementToRemove) {
  const start = document.querySelector(`#select_addons [data-feature=${add_on}]`).getBoundingClientRect();
  const end = featureElementToRemove.getBoundingClientRect();
  // console.log(end);

  const diffX = start.x - end.x;
  const diffY = start.y - end.y;
  featureElementToRemove.style.setProperty("--diffX", diffX);
  featureElementToRemove.style.setProperty("--diffY", diffY);

  featureElementToRemove.classList.add("animate-feature-out");
  featureElementToRemove.addEventListener("animationend", () => document.querySelector(`ul [data-feature=${add_on}]`).remove());
}

function displayPutOnAnimation(add_on, featureElement) {
  const start = document.querySelector(`#select_addons [data-feature=${add_on}]`).getBoundingClientRect();
  console.log(start);
  const end = featureElement.getBoundingClientRect();

  const diffX = start.x - end.x;
  const diffY = start.y - end.y;
  featureElement.style.setProperty("--diffX", diffX);
  featureElement.style.setProperty("--diffY", diffY);
  featureElement.classList.add("animate-feature-in");
}

function removeComputer() {
  console.log("remove computer");
  addOns.computer = false;
  forbiddenFeature.sport_grip = false;
  console.log("sport grip is false");
  document.querySelector(`#product_view [data-feature=computer]`).classList.add("hide");
  console.log("computer is removed");
  const start = document.querySelector(`#select_addons [data-feature=computer]`).getBoundingClientRect();
  const featureElementToRemove = document.querySelector(`#selected_addons ul [data-feature=computer]`);
  const end = featureElementToRemove.getBoundingClientRect();
  const diffX = start.x - end.x;
  const diffY = start.y - end.y;
  featureElementToRemove.style.setProperty("--diffX", diffX);
  featureElementToRemove.style.setProperty("--diffY", diffY);
  featureElementToRemove.classList.add("animate-feature-out");
  featureElementToRemove.addEventListener("animationend", () => document.querySelector(`ul [data-feature=computer]`).remove());
}
