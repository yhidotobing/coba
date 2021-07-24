const fridge = ["Orange", "Melon", "Durian", "Oil"];

function goToKitchen() {
  console.log("Go to Kitchen");
}

function checkTheOil() {
  if (fridge.includes("Oil")) {
    console.log("Oil is there");
    return true;
  }
  console.log("Ooil is not there");
  return false;
}

function goToMarket(oil) {
  if (!oil) {
    console.log("Goto market");
    console.log("Buy the oil");
    console.log("Go back home");
  }
}

function fryTheRice() {
  console.log("Fry the rice");
}

function riceIsReady() {
  console.log("Fried rice is ready to eat");
}

function start() {
  goToKitchen();
  const oil = checkTheOil();
  goToMarket(oil);
  fryTheRice();
  riceIsReady();
}

start();
