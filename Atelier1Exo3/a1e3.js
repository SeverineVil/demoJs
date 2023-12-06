let countries = [ "France", "Japon", "Togo","Suède", "Brésil"];
// Sélection de l'élément de tableau par son ID
let array = document.getElementById("my_countries");

// Boucle pour chaque pays
for (let i = 0; i < countries.length; i++) {
    // Création d'une ligne de tableau
    let line = array.insertRow(i);

    // Création d'une cellule de tableau
    let cell = line.insertCell(0);

    // Ajout du nom du pays dans la cellule
    cell.innerHTML = countries[i];
}
