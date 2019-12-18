// welcome screen
alert("Welcome to Trenitalia, fellow user.");

// how much km do you want to travel?
var travelKm = parseInt(prompt("How much distant would you like to travel today?"));
if (isNaN(travelKm)) {
  travelKm = parseInt(prompt("Please just insert a numeric value without any symbol for the travel distance."));
  if (isNaN(travelKm)) {
    alert("Sorry, I can't write loops just yet, reload the page and write normal numbers, thank you.");
    throw new Error("User didn't set an ordinary numeric value.");
  }
}
console.log("travelKM set to " + travelKm);

// how old are you?
var travelAge = parseInt(prompt("How old are you?"));
if (isNaN(travelAge)) {
  travelAge = parseInt(prompt("Please just insert a numeric value without any symbol for the age."));
  if (isNaN(travelAge)) {
    alert("Sorry, I can't write loops just yet, reload the page and write normal numbers, thank you.");
    throw new Error("User didn't set an ordinary numeric value.");
  }
}
console.log("travelAge set to " + travelAge);

// then the total price of your ticket is...
// 0.21 euros per km
// < 18y 20% discount
// > 65y 40% discount

// var test = Math.floor(Math.random() * 100) + 1;
// console.log(test);
