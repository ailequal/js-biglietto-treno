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
console.log("travelKm set to: " + travelKm);

// how old are you?
var travelAge = parseInt(prompt("How old are you?"));
if (isNaN(travelAge)) {
  travelAge = parseInt(prompt("Please just insert a numeric value without any symbol for the age."));
  if (isNaN(travelAge)) {
    alert("Sorry, I can't write loops just yet, reload the page and write normal numbers, thank you.");
    throw new Error("User didn't set an ordinary numeric value.");
  }
}
console.log("travelAge set to: " + travelAge);

// ticket pricing 0.21 euros per km
// < 18y 20% discount
// > 65y 40% discount
alert("The travel ticket is 0.21 Euros per Km.");

var travelPrice;
if (travelAge < 18) {
  alert("Congratulations, since you're less than 18 years old, you have a 20% discount.");
  travelPrice = Math.ceil(travelKm * 0.21 * 0.80 * 100) / 100;
  alert("The final ticket price is: " + travelPrice + " Euros.");
} else if (travelAge > 65) {
  alert("Congratulations, since you're over than 65 years old, you have a 40% discount.");
  travelPrice = Math.ceil(travelKm * 0.21 * 0.60 * 100) / 100;
  alert("The final ticket price is: " + travelPrice + " Euros.");
} else {
  alert("Sorry, we have no discount for you.");
  travelPrice = Math.ceil(travelKm * 0.21 * 0.60 * 100) / 100;
  alert("The final ticket price is: " + travelPrice + " Euros.");
}
console.log("travelPrice set to: " + travelPrice);

alert("I wonder... Will your train be there in time? Who knows...");
