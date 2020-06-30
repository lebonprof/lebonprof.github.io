function clique() {
 

 var nom = document.getElementById("inom").value;
		var plainte = document.getElementById("iplainte").value;
			var prenom = document.getElementById("iprenom").value;
				var nombre = document.getElementById("inombre").value;
					var email = document.getElementById("imail").value;
						var  paragraphe = document.getElementById("r"); 
	


	if (nombre >= 10) {
		if (nombre <= 121)
		{
	    paragraphe.innerHTML = "Mr/Mme " + nom + ", votre plainte concernant un problème avec '" + plainte + "' a bien été prise en compte, un mail vous sera envoyé à l'addresse suivante : " + email + " ";}
	else if (nombre > 121) {
		paragraphe.innerHTML =  "Votre âge ne correspond pas à quelqu'un pouvant remplir ce formulaire";}
	else {
		paragraphe.innerHTML = "Votre âge ne correspond pas à quelqu'un pouvant remplir ce formulaire"}
	
	}
	
	else {
		paragraphe.innerHTML = "Votre âge ne correspond pas à quelqu'un pouvant remplir ce formulaire"}
			
}
