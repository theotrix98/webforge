let gc = 50; //gc stands for Gold Coins, this is the currency
let gDisplay = document.getElementById("balDis");

function updateBal() {
  gDisplay.textContent = gc + " GC"; //displays value of gc in top right, concatenates GC as like a currency symbol
}

updateBal();

let copper = {name: "Copper", ingotPrice: 10, sellMulti: 1.1};

let brokePopUp = document.getElementById("noMoneyAlert");

function noMoneyPop() {
  brokePopUp.style.display = "block";
}

function clearTxtBox(currenttxtbox) {
  currenttxtbox.style.display = "none";
}

function buyIngot(ingot) {
  if (gc >= ingot.ingotPrice) {
    gc = gc - ingot.ingotPrice;
  updateBal();
  } else {
    noMoneyPop();
  }
  
}
