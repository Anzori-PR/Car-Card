// 1. Change color of car and addToCart button color when a color is selected // - Selecting Elements 
const redColor = document.querySelector(".red");
const whiteColor = document.querySelector(".white");
const blackColor = document.querySelector(".black");
const blueColor = document.querySelector(".blue");
const cartButton = document.getElementById("button");
const itemTag = document.getElementsByTagName("h1")[0];
const imageCard = document.querySelector(".car");
const price = document.querySelector(".price-value");
const feedbackBtn = document.querySelector(".feedback");
// Modifying Elements
// - Add Event Listeners 
// - Red Color
redColor.addEventListener("click", function () {
    cartButton.style.backgroundColor = "red";
    cartButton.style.color = "white";
    price.innerHTML = "$96,200";
    imageCard.style.backgroundImage = 'url("./img/red.png")';
});
// - white Color 
whiteColor.addEventListener("click", function () {
    cartButton.style.backgroundColor = "white";
    cartButton.style.color = "black";
    price.innerHTML = "$94,990";
    imageCard.style.backgroundImage = 'url("./img/white.png")';
});
// - Black Color
blackColor.addEventListener("click", function () {
    cartButton.style.backgroundColor = "black";
    cartButton.style.color = "white";
    price.innerHTML = "$95,800";
    imageCard.style.backgroundImage = 'url("./img/black.png")';
});

// - blue Color
blueColor.addEventListener("click", function () {
    cartButton.style.backgroundColor = "blue";
    cartButton.style.color = "white";
    price.innerHTML = "$95,500";
    imageCard.style.backgroundImage = 'url("./img/blue.png")';
});

