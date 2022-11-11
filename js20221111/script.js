let monthlySalary = 900;
let vardas = "Mantai";

function pasisveikinimas(a) {
  return `Sveikas, ${a}`;
}
console.log(pasisveikinimas(vardas));

function metinesPajamos(b) {
  return b * 12;
}

console.log(metinesPajamos(monthlySalary));

x1 = 5;

function squared(number) {
  return (number *= number);
}

console.log(squared(x1));

//skaiciuotuvas

let x = 5;
let y = 8;
let maf = "/";
function calculator(a, b, maf) {
  switch ((a, b, maf)) {
    case "+":
      return a + b;
      break;
    case "-":
      return a - b;
      break;
    case "*":
      return a * b;
      break;
    case "/":
      return a / b;
      break;
  }
}

console.log(calculator(x, y, maf));

//user name
userName = "ne tavo reikalas";

function getVardas(a) {
  return `Welcome back, ${a}`;
}

console.log(getVardas(userName));

//arrays

let tinderMatches = [
  "Austeja",
  "Austeja",
  "Austeja",
  "Monika",
  "Greta",
  "Paulina",
  "Juste",
  "Juste",
  "Oksana",
  "Oksana",
  "Guste",
  "Agne",
  "Andzelika",
  "Auguste",
];

console.log(tinderMatches);

//Masyvo specifinio nario issaukimas
// console.log(tinderMatches[1]);

//Masyvo nariu skaicius
// console.log(tinderMatches.length);

// //Idedam nauja nari
// console.log(tinderMatches.push("Ieva"));

// //Anuliuojam paskutini nari
// console.log(tinderMatches.pop());
// console.log(tinderMatches);

// //Anuliuojam pirma nari
// tinderMatches.shift();
// console.log(tinderMatches);

// //Idedam nauja nari i pradzia
// tinderMatches.unshift("Gabriele");
// console.log(tinderMatches);

// //Splice metodas - galima greitai ideti nauja nari ir tuo paciu pasalinti narius
// tinderMatches.splice(0, 2, "Gintare");
// console.log(tinderMatches);

// //Jeigu nenurodome kintamojo, splice bus naudojamas kaip elementu panaikinimo metodas
// tinderMatches.splice(6, 2);
// console.log(tinderMatches);

// //For each ciklas
tinderMatches.forEach((tinderMatches, i) => {
  console.log(i + 1, tinderMatches);
});

//Map panaudojimas
tinderMatches.map((a) => {
  console.log(a);
});

//Duomenu atfiltravimas
let duomenuPatikra = tinderMatches.filter(
  (arSumatchinai) => arSumatchinai == "Paulina"
);
console.log(duomenuPatikra);

//filtravimo pvz
let skaiciai = [1, 20, 50, 15, 3, 8];
let sandelioLikutis = skaiciai.filter((kiekYra) => kiekYra > 10);
console.log(sandelioLikutis);

//Array sortinimas
console.log(tinderMatches.sort());

// //concat panaudojimas - idedamos naujos reiksmes
// console.log(tinderMatches.concat("Patricija", "Kaspisija"))

//Ipushinimas naujas masyvas
let prekes = [
  "Stalas",
  "Monitorius",
  "Pele",
  "Automobilis",
  "Pele",
  "Kilimas",
  "Stalas",
  "Pele",
  "Stalas",
  "Pele",
];

prekes.forEach((prekes, i) => {
  console.log(i + 1, prekes);
});

console.log(prekes.indexOf("Pele"));

// if(prekes.indexOf("Kombaineris" === -1)){
//     prekes.push("Kombaineris")
// }

newPrekes = [];

prekes.forEach((item) => {
  if (prekes.indexOf(item) === -1) {
    newPrekes.push(item);
  }
});

console.log(newPrekes);

//darbas su dvimaciais masyvais
let klasiokai = [
  ["Airidas", "zp20/1", 1, "airidas@gmail.com"],
  ["Linas", "zp21/1", 2, "linas@gmail.com"],
  ["kostas", "zp20/1", 10, "kostas@gmail.com"],
  ["Andrius", "zp20/2", 6, "andrius@gmail.com"],
];

console.log(klasiokai[2][3]);

//JS objectai
let studentas = {
  name: "Airidas",
  age: 19,
  isAdmin: false,
  courses: ["html", "css", "js"],
  wife: null,
};

let paverciu = JSON.stringify(studentas);

console.log(typeof studentas);
console.log(paverciu);

//darbas su local ir session storage
localStorage.setItem("MyName", "Jolita");
let name = localStorage.getItem("MyName");
console.log(name);
