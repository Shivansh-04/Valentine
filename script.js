const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const noNext = document.getElementById("noNext");
const intermediateNext = document.getElementById("intermediateNext");
const dateNext = document.getElementById("dateNext");
const submitFood = document.getElementById("submitFood");
const submitDesert = document.getElementById("submitDesert");

const home = document.querySelector(".home");
const intermediate = document.querySelector(".intermediate");
const calendar = document.querySelector(".calendar");
const foodSelection = document.querySelector(".food-selection");
const thankYou = document.querySelector(".thank-you");
const no = document.querySelector(".no");
const desert = document.querySelector(".desert");

let selectedDate = "";
let selectedFoods = [];
let selectedDesert = [];

yesBtn.addEventListener("click", () => {
  home.style.display = "none";
  intermediate.style.display = "block";
});

submitDesert.addEventListener("click", () => {
  const foodOptions = document.querySelectorAll('input[name="food"]:checked');
  selectedDesert = Array.from(foodOptions).map((food) => food.value);

  if (selectedDesert.length === 0) {
    alert("Please select at least one food option!");
    return;
  }

  desert.style.display = "none";
  thankYou.style.display = "block";
});

noBtn.addEventListener("click", () => {
  home.style.display = "none";
  no.style.display = "block";
});

noNext.addEventListener("click", () => {
  no.style.display = "none";
  home.style.display = "block";
});

intermediateNext.addEventListener("click", () => {
  intermediate.style.display = "none";
  calendar.style.display = "block";
});

dateNext.addEventListener("click", () => {
  selectedDate = document.getElementById("datePicker").value;
  if (!selectedDate) {
    alert("Please select a date!");
    return;
  }
  calendar.style.display = "none";
  foodSelection.style.display = "block";
});

submitFood.addEventListener("click", () => {
  const foodOptions = document.querySelectorAll('input[name="food"]:checked');
  selectedFoods = Array.from(foodOptions).map((food) => food.value);

  if (selectedFoods.length === 0) {
    alert("Please select at least one food option!");
    return;
  }

  foodSelection.style.display = "none";
  desert.style.display = "block";
  // thankYou.style.display = "block";

  // sendEmail(selectedDate, selectedFoods);
});

// function sendEmail(date, foods) {
//   const emailBody = `Selected Date: ${date}\nSelected Foods: ${foods.join(', ')}`;
//   window.location.href = `mailto:shivanshgupta0987@gmail.com?subject=Valentine's Response&body=${encodeURIComponent(emailBody)}`;
// }
