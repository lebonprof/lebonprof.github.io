function controle() {
	var nom = document.getElementById("inom").value;
	var paragraphe = document.getElementById("a_remplir");
	paragraphe.innerHTML = "Bonjour M. Chaudet !";
}

function controle2() {
	var nombre = document.getElementById("inombre").value;
	var paragraphe = document.getElementById("a_remplir2");
	if (nombre < 10) {
		paragraphe.innerHTML = "Vous avez choisis un nombre inferieur a 10! C'est incroyable, non?!";
	}
	else {
		paragraphe.innerHTML = "Vous avez choisis un nombre superieur a 10! C'est incroyable, non?!";
	}
}

function controle3() {
	var paragraphe = document.getElementById("a_remplir3");
	paragraphe.innerHTML = "Vous devez avoir raison!";
}

function controle4() {
	var reponse = document.getElementById("ireponse").value;
	var paragraphe = document.getElementById("a_remplir4");
	if (reponse == "oui") {
		paragraphe.innerHTML = "C'est la bonne réponse!";
	}
	else {
		paragraphe.innerHTML = "Vous avez surement mal écrit...";
	}
}

