let prix = 50000;
let epargne = 0;
let semaine = 0;

while (epargne < prix) {
    semaine++;
    epargne += 4000;
}

console.log(`Il te faut ${semaine} semaines d'épargne.`);