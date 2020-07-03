function controle() {
	var nom = document.getElementById("inom").value;
	var paragraphe = document.getElementById("a_remplir");
	paragraphe.innerHTML = "Bonjour "+nom+" !";
}

function controle2() {
	var nom = document.getElementById("inombre").value;
	var paragraphe = document.getElementById("a_remplir2");
	if (nom < 60) { 
		paragraphe.innerHTML = "Vous êtes jeune !";
	}
	else {
		paragraphe.innerHTML = "Vous commencez à prendre de l'âge ...";
	}
}

function controle3() {
	var nom = document.getElementById("ireponse").value;
	var paragraphe = document.getElementById("a_remplir3");
	if (nom == "chat" ) { 
		paragraphe.innerHTML = "Nous sommes d'accord !";
	}
	else {
		paragraphe.innerHTML = "Non. C'est moins mignon qu'un chat !";
	}
}

function controle4() {
	var nom = document.getElementById("imetier").value;
	var paragraphe = document.getElementById("a_remplir4");
	if (nom == "enseignant" ) { 
		paragraphe.innerHTML = "Quel beau métier.";
	}
	else {
		paragraphe.innerHTML = "C'est un poisson d'avril !";
	}
}

function controle5() {
	var paragraphe = document.getElementById("a_remplir5");
	paragraphe.innerHTML = "C'est un bon lycée.";
}








	