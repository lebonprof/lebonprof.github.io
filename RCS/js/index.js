function pseudoAnwserChange() {
	if(document.getElementById('pseudoyes').checked) {
		document.getElementById('firstopq').style.display = "block";
		document.getElementById("pseudoinput").className += " textfield";
	}else {
		document.getElementById('firstopq').style.display = "none";
	}
}

function sendForm() {
	var pourcentageGamer = 0;
	var chatD = false;

	document.getElementById('modalbox').style.display = "block";
	var pseudo = document.getElementById('pseudoinput').value;
	if(pseudo != "") {
		document.getElementById('resultitle').innerHTML = "Résultat de "+pseudo+" :";
		pourcentageGamer+=20;
	}else {
		document.getElementById('resultitle').innerHTML = "Résultat :";
	}

	if(document.getElementById('meme').value == "memedef") {
		pourcentageGamer+=10;
	}

	var nbJeu = document.getElementById('vgamesnb').value;
	if(nbJeu >= 5 && nbJeu < 15) {
		pourcentageGamer+=5;
	}else if (nbJeu >= 15 && nbJeu < 30) {
		pourcentageGamer+=10;
	}else if (nbJeu >= 30 && nbJeu < 50) {
		pourcentageGamer+=15;
	}else {
		pourcentageGamer+=20;
	}

	var jeupref = document.getElementById('jeuquefaire').value;
	if(jeupref == "amuse") {
		pourcentageGamer+=5;
	}else if (jeupref == "tryhard") {
		pourcentageGamer+=15;
	}else if (jeupref == "quest") {
		pourcentageGamer-=10;
	}else {
		pourcentageGamer-=5;
	}

	var avril = document.getElementById('conciderationavril').value;
	if(avril == "rien") {
		pourcentageGamer-=10;
	}else if (avril == "tryhard") {
		pourcentageGamer+=10;
	}else if (avril == "poisson") {
		pourcentageGamer+=5;
	}else {
		pourcentageGamer+=5;
		chatD = true;
	}

	if(document.getElementById('langagechangeyes').checked) {
		pourcentageGamer+=15;
	}

	var defDLC = document.getElementById('defdlc').value.toLowerCase();
	if(defDLC.includes("contenu") && defDLC.includes("gratuit") && defDLC.includes("payant") && defDLC.includes("ajoute") && defDLC.includes("jeu")
		|| defDLC.includes("Downloadable Content")) {
		pourcentageGamer+=10;
	}else if(defDLC.includes("contenu") && defDLC.includes("ajoute") && defDLC.includes("jeu") && defDLC.includes("contenu") && defDLC.includes("majoritairement payant")) {
		pourcentageGamer+=10;
	}else if (defDLC.includes("contenu additionnel") && defDLC.includes("jeu") && defDLC.includes("contenu") && defDLC.includes("majoritairement payant")) {
		pourcentageGamer+=10;
	}else if (defDLC.includes("extensions") && defDLC.includes("téléchargeable") && defDLC.includes("jeu") && defDLC.includes("payante") && defDLC.includes("gratuite")) {
		pourcentageGamer+=10;
	}

	displayAnswer(pourcentageGamer,chatD);
}

function displayAnswer(val, chatAfficher) {
	if (val < 0) val = 0;

	if(chatAfficher == true) {
		document.getElementById('chatimg').style.display = "block";
	}
	
	if (val < 20) {
		document.getElementById('resultcontent').innerHTML = "Vous êtes un g4m3r à <strong>"+val+" %</strong>.<br> Il va falloir vous ressaisir."
	}else if (val >= 20 && val < 50) {
		document.getElementById('resultcontent').innerHTML = "Vous êtes un g4m3r à <strong>"+val+" %</strong>.<br> Vous êtes débutant dans ce domaine.<br>Ne lachez rien !"
	}else if (val >= 50 && val < 80) {
		document.getElementById('resultcontent').innerHTML = "Vous êtes un g4m3r à <strong>"+val+" %</strong>.<br> Vous possèdez un bon niveau.<br>Continuez comme ça !"
	}else if (val >= 80 && val < 100) {
		document.getElementById('resultcontent').innerHTML = "Vous êtes un g4m3r à <strong>"+val+" %</strong>.<br> Vous êtes un expert en la matière.<br>GG !"
	}else if(val == 100) {
		document.getElementById('resultcontent').innerHTML = 
		"Vous êtes un g4m3r à <strong>"+val+" %</strong>.<br> Vous êtes le grand dieu/la grande déesse des jeux vidéos, plus rien n'a de secret pour vous."
	}else {
		document.getElementById('resultcontent').innerHTML = "Une erreur inattendue s'est produit. Veuillez réessayer."
	}
}

function closeModal() {
	document.getElementById('pseudoinput').value = "";
	document.getElementById('defdlc').value = "";
	document.getElementById('vgamesnb').value = "";
	document.getElementById('firstopq').style.display = "none";
	document.getElementById('modalbox').style.display = "none";
	document.getElementById("pseudoyes").checked = false;
	document.getElementById("pseudono").checked = false;
	document.getElementById("langagechangeyes").checked = false;
	document.getElementById("langagechangeno").checked = false;
	document.getElementById("conciderationavril").selectedIndex = 0;
	document.getElementById("jeuquefaire").selectedIndex = 0;
	document.getElementById("meme").selectedIndex = 0;
	document.getElementById('chatimg').style.display = "none";
}