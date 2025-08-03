function Material(name, ingpri, selmult, brkchnc) {
  this.name = name;
  this.ingotPrice = ingpri;
  this.sellMulti = selmult;
  this.breakChance = brkchnc;
} // metal object creator thingy idfk

const cpr = new Material("Copper", 10, 1.2, 0);
const irn = new Material("Iron", 25, 1.5, 0);
const glss = new Material("Glass", 75, 2, 0.75);
const stl = new Material("Steel", 75, 1.75, 0);
const gld = new Material("Gold", 125, 2.5, 0.5);
const slvr = new Material("Silver", 100, 2, 0.2);
const obsd = new Material("Obsidian", 200, 2.5, 0);
const grit = new Material("Grittium", 250, 5, 0.95);
const sted = new Material("Steadite", 250, 3, 0);
const chqu = new Material("Chance-Quartz", 250, 4, 0.5);

// ingot objects ^ | blueprint objects v

function Blueprint(shape, buycost, basecost, hardness) {
  this.itemShape = shape;
  this.itemPrice = buycost;
  this.itemSell = basecost;
  this.difficulty = hardness;
} // blueprint object creator thingf...

const swrd = new Blueprint("Sword", 0, 5, 1);
const sper = new Blueprint("Spear", 30, 15, 2);
const axe = new Blueprint("Axe", 60, 40, 3);
const shield = new Blueprint("Shield", 100, 75, 4);
const crest = new Blueprint("Crest", 300, 150, 5);

// blueprint objects ^

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
