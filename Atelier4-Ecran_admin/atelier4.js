let users = [
    {"nom" : "Skywalker", "prénom" : "Luke", "camp" : "Jedi"},
    {"nom" : "Skywalker", "prénom" : "Anakin", "camp" : "Jedi (?)"},
    {"nom" : "Jin", "prénom" : "Qui Gon", "camp" : "Jedi"},
    {"nom" : "Palpatine", "prénom" : "Chancelier", "camp" : "Sith"},
    {"nom" : "Dark", "prénom" : "Maul", "camp" : "Sith"},
    {"nom" : "Tano", "prénom" : "Ahsoka", "camp" : "Gris"},    
]
    let tableBody = document.getElementById("users");
    console.log(tableBody);
    let template = document.getElementById("usersrow");
    console.log(template);

    users.forEach(function(user) {
        let clone = document.importNode(template.content, true);
        let td = clone.querySelectorAll("td");
        td[0].textContent = user.nom;
        td[1].textContent = user.prénom;
        td[2].textContent = user.camp;

        console.log(td);
        console.log(user.nom);
        console.log(user.prénom);
        console.log(user.camp);

        tableBody.appendChild(clone);

     });
