// J'attends que toutes les balises aient été chargées avant de leur
// affecter un comportement.
document.body.onload = initialisation;

let saisie;

function initialisation() {
    // 1e démo
    // Je récupère la référence vers mon bouton
    let mon_bouton = document.getElementById("mon_beau_bouton");
    mon_bouton.addEventListener("click", changerTexte);


    // 2e démo
    let mes_boutons = document.querySelectorAll(".button_container > button");
    for (let current_button of mes_boutons) {
        current_button.addEventListener("click", afficherClic);
    }

    // mes_boutons.forEach(current_button => current_button.addEventListener("click", afficherClic));

    // 3e démo
    saisie = document.getElementById("ma_saisie");
    saisie.addEventListener("change", ajouterAuTableau);
}

function changerTexte() {
    alert("Ceci est un message très important !");
    let mon_paragraphe = document.getElementById("texte_a_changer");
    mon_paragraphe.innerText = "Le texte a été changé !";
}

function afficherClic(event) {
    console.log(event);
    // Je vais chercher le texte à l'intérieur de la cible de notre clic
    alert(event.target.innerText);
}

function ajouterAuTableau() {
    /* Objectif :
        créer un tr dans notre table,
        créer un td dans ce tr,
        associer le texte saisie par l'utilisateur à notre td
    */
   let mon_td = document.createElement("td");
   mon_td.innerText = saisie.value; // event.target.value

   let mon_tr = document.createElement("tr");
   
   // Je mets la balise td nouvellement créée à l'intérieur de la balise tr
   mon_tr.appendChild(mon_td);

   let ma_table = document.getElementById("mon_tableau");
   ma_table.appendChild(mon_tr);
}