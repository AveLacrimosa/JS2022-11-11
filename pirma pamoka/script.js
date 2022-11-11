let fName = "Linas";
let role = "Studentas";
console.log(name);
//senas sujungimas - nenaudoti
console.log("Mana vardas yra " + name, "ir as esu " + role);
//siuolaikiskai naudojamas budas "`" (tilde be shifto)
console.log(`As vardu ${name} ir dirbu kaip ${role}`);

//kintamieji ir skaiciai
let price = 6.49;
let quantity = 4;
let totalPrice = price * quantity;
console.log(
  `Sandelyje turime ${quantity} skaiciu prekiu, vieneto kaina yra ${price}, nusipirkus viska sumokesite ${totalPrice}`
);

let mistake;
console.log(mistake);

let happy = true;
console.log(happy);

//var kintamasis - nesaugus

// // var name = "Onute";
// console.log(name);

console.log(typeof role);
console.log(typeof happy);
console.log(typeof totalPrice);

console.log(isNaN(fName));
console.log(isNaN(totalPrice));

//Studento stipendija

a = 9;
b = 5;

if (a >= 9 && b <= 5) {
  console.log("stipendija bus suteikiama");
} else {
  console.log("stipendija nebus suteikiama");
}

let studentName = "Linas";
let loggedIn = true;

if (loggedIn){
    console.log(`Sveiki sugrize, ${studentName}`)
}else{
    console.log("Sveiki.")
}

//Paskola

let vardas = "Donatas";
let sallary = 800;
let married = false;

if (sallary>800 && married == false){
    console.log(`${vardas}, sveikiname, Jus gausite paskola`)
}else if (sallary>1000 && married == true){
    console.log("Jum paskola bus suteikta")
}else{
    console.log("Atvykite susitvarkyti dokumentus")
}

//studento pazymys

let pazymys = 10;

switch(pazymys){
    case 1:
    case 2:
    case 3:
        console.log(`Studento pazymys ${pazymys} yra neigiamas`);
        break;
    case 4:
        console.log(`Studento pazymys ${pazymys} yra teigiamas`)
        break;
    case 5:
    case 6:
        console.log(`Studento pazymys ${pazymys} yra patenkinamas`)
        break;
    case 7:
    case 8:
        console.log(`Studento pazymys ${pazymys} yra geras`)
        break;
    case 9:
        console.log(`Studento pazymys ${pazymys} yra labai geras`)
        break;
    case 10:
        console.log(`Studento pazymys ${pazymys} yra puikus!`)
        break;
    default:
        console.log("ivesta netinkama reiksme")
}

console.log(typeof pazymys)