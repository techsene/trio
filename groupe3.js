let age = 11;
let recetteTotal = 0;
let billet1500 = 0;
let billet2500 = 0;

while (age <= 20) {
    let prix;

    if (age < 16) {
        prix = 1500;
        billet1500++;
    } else {
        prix = 2500;
        billet2500++;
    }

    console.log(`Âge : ${age} ans — Prix : ${prix} FCFA`);

    recetteTotal += prix;
    age++;
}

console.log("Recette totale :", recetteTotal, "FCFA");
console.log("Billets à 1 500 FCFA :", billet1500);
console.log("Billets à 2 500 FCFA :", billet2500);