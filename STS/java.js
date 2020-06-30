function controle() {
	var nom = document.getElementById("inom").value;
	var prenom = document.getElementById("iprenom").value;
	var age = document.getElementById("iage").value;
	var paragraphe = document.getElementById("a_remplir");
	paragraphe.innerHTML = "Bonjour " + nom + " " + prenom + " tu as " + age + " ans!";
	if (age<=12){
		document.getElementById('bigpic').style.display='block';
		document.getElementById('big').style.display='none';
		document.getElementById('pic').style.display='none';
		var paragraphe = document.getElementById("text");
		paragraphe.innerHTML = prenom + ", pensez vous que c'est un poisson d'avril?";
	}
	else if (age>120) {
		document.getElementById('bigpic').style.display='none';
		document.getElementById('big').style.display='none';
		document.getElementById('pic').style.display='block';
		var paragraphe = document.getElementById("text");
		paragraphe.innerHTML = " "
	}
	else {
		document.getElementById('bigpic').style.display='none';
		document.getElementById('big').style.display='block';
		document.getElementById('pic').style.display='none';
		var paragraphe = document.getElementById("text");
		paragraphe.innerHTML = "La légende raconte que le poisson d'avril existait il y a bien des siècles. Il paraîtrait qu'un chat, suffisement courageux alla le défier. Le poisson mourut. Je viens de retrouvé le coupable, il s'appelle " + nom + " " + prenom + " et il a " + age + " ans ! Il faut à tout prix m'aider à le mettre en prison!";
	}
}

function suite() {
	var age = document.getElementById("iage").value;
	if (age<=12) {
		var paragraphe = document.getElementById("zone");
		paragraphe.innerHTML = "Envoie oui ou non au 07 68 34 49 34 (6x0,75€/SMS + prixSMS)."
	}
	else if(age>120) {
		var paragraphe = document.getElementById("zone");
		paragraphe.innerHTML = "Cela ne sert a rien de vous vieillir à ce point, l'homme le plus vieux est mort à 116 ans et la femme la plus vieille à 124 ans. Donc en disant que vous avez " + age + " ans vous mentez, ou alors ce n'est pas marquer comme un record!";
	}
	else {
		var paragraphe = document.getElementById("zone");
		paragraphe.innerHTML = "Si vous avez des informations sur ce meurtre, appeler au 07 68 34 49 34 (5x1€/min + prixAppel) ou par message (6x0,75€/SMS + prixSMS).";
		
	}
}