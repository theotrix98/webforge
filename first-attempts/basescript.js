function Material(name, ingpri, selmult, brkchnc) {
  this.name = name;
  this.ingotPrice = ingpri;
  this.sellMulti = selmult;
  this.breakChance = brkchnc;
} // metal object creator thingy idfk

const cpr = new Material("Copper", 10, 1.1, 0);

function Blueprint(shape, buycost, basecost, hardness) {
  this.itemShape = shape;
  this.itemPrice = buycost;
  this.itemSell = basecost;
  this.difficulty = hardness;
} // blueprint object creator thingf...

// THIS IS A LINE BREAK FOR THE OBJECT STUFF!! Everything above this is to establish materials, blueprints, etc! Following this point is the main code for the game

let gc = 50; //gc stands for Gold Coins, this is the currency
let gDisplay = document.getElementById("balDis");

function updateBal() {
  gDisplay.textContent = gc + " GC"; //displays value of gc in top right, concatenates GC as like a currency symbol
}

updateBal();

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
