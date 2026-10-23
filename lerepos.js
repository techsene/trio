let jour = "mardi";

switch (jour.toLowerCase()) {
  case "samedi":
  case "dimanche":
    console.log(`${jour} est un jour de repos à la DFS.`);
    break;
  case "lundi":
  case "mardi":
  case "mercredi":
  case "jeudi":
  case "vendredi":
    console.log(`${jour} n'est pas un jour de repos à la DFS.`);
    break;
  default:
    console.log("Jour invalide.");
}