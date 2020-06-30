function melangeur(animal, metier, mois, rpg) {
    if (document.getElementById("Chat").checked){
        animal = "Chat";
    }
    else if (document.getElementById("Chien").checked){
        animal = "Chien";
    }
    if (document.getElementById("Samouraï").checked){
        metier = "Samouraï";
    }
    else if (document.getElementById("Poissonier").checked){
        metier = "Poissonier";
    }
    if (document.getElementById("Janvier").checked){
        mois = "Janvier";
    }
    else if (document.getElementById("Février").checked){
        mois = "Février";
    }
    else if (document.getElementById("Mars").checked){
        mois = "Mars";
    }
    else if (document.getElementById("Avril").checked){
        mois = "Avril";
    }
    else if (document.getElementById("Mai").checked){
        mois = "Mai";
    }
    else if (document.getElementById("Juin").checked){
        mois = "Juin";
    }
    else if (document.getElementById("Juillet").checked){
        mois = "Juillet";
    }
    else if (document.getElementById("Août").checked){
        mois = "Août";
    }
    else if (document.getElementById("Septembre").checked){
        mois = "Septembre";
    }
    else if (document.getElementById("Octobre").checked){
        mois = "Octobre";
    }
    else if (document.getElementById("Novembre").checked){
        mois = "Novembre";
    }
    else if (document.getElementById("Décembre").checked){
        mois = "Décembre";
    }
    rpg = document.getElementById("rpg").value;
    var paragraphe = document.getElementById('a_remplir');
    if (animal=="Chat" && metier=="Samouraï"){
        paragraphe.innerHTML = "Chamouraï de "+mois+" niveau "+rpg;
    }
    else if (animal=="Chat" && metier=="Poissonier"){
        paragraphe.innerHTML = "Chassonier de "+mois+" niveau "+rpg;
    }
    else if (animal=="Chien" && metier=="Samouraï"){
        paragraphe.innerHTML = " Chienouraï de "+mois+" niveau "+rpg;
    }
    else if (animal=="Chien" && metier=="Poissonier"){
        paragraphe.innerHTML = "Poienier de "+mois+" niveau "+rpg;
    }
    else{
        paragraphe.innerHTML = "Echec";
    }
}