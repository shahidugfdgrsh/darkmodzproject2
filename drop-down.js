const threeDotBtn = document.getElementById("threeDotBtn");
const threeDotMenu = document.getElementById("threeDotMenu");
const closeThreeDotBtn = document.getElementById("closeThreeDot");
const downloadsSection = document.getElementById("downloadsSection");
const aboutSection = document.getElementById("aboutSection");
const downloadsLink = document.getElementById("downloadsLink");
const aboutLink = document.getElementById("aboutLink");

threeDotBtn.addEventListener("click", () => {
  threeDotMenu.style.display = "block";
});

closeThreeDotBtn.addEventListener("click", () => {
  threeDotMenu.style.display = "none";
});

downloadsLink.addEventListener("click", (e) => {
  e.preventDefault();
  downloadsSection.style.display = "block";
  aboutSection.style.display = "none";
  threeDotMenu.style.display = "none";
});

aboutLink.addEventListener("click", (e) => {
  e.preventDefault();
  aboutSection.style.display = "block";
  downloadsSection.style.display = "none";
  threeDotMenu.style.display = "none";
});
