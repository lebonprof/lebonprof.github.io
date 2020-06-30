function controle() {
    var nom = document.getElementById("inom").value;
    var prenom = document.getElementById("iprenom").value;
    var nombre = document.getElementById("inombre").value;
	var  paragraphe = document.getElementById("a_remplir"); 
    if (nombre >= 500) {
	    paragraphe.innerHTML = "Merci Mr/Mme " + nom + " de votre generosite envers la fondation Cicerello ! </br> Vous recevrez sous peu un vaccin contre le Covid-19 en cadeau de remerciement .";
	}
	else if (nombre >= 200 ) {
		paragraphe.innerHTML = "Nous vous remercions de votre don " + prenom + " " + nom + " (meme si nous sommes sur que vous pouvez faire mieux)";
	}
	else {
		paragraphe.innerHTML = "Nous sommes convaincus que vous pouvez faire un petit effort " + prenom + "..."}
			
}
