	function javascript() {
			var nom = document.getElementById("inom").value;
			var genre = "";
			if (document.getElementById('iFemme').checked) {
				genre = document.getElementById('iFemme').value;
			}
			if (document.getElementById('iHomme').checked) {
				genre = document.getElementById('iHomme').value;
			}
			
			if (genre == "Homme"){
				genre = "Monsieur";
			}
			if (genre == "Femme"){
				genre = "Madame";
			}

			var hab = document.getElementById("iadresse").value;
			var prenom = document.getElementById("iprenom").value;
			var paragraphe = document.getElementById("a_remplir");
			
			if (hab == "Rue du 1er avril"){
				paragraphe.innerHTML = "Bonjour " + genre + " " + prenom + " " + nom + ". Vous avez donc découvert mon secret en rentrant la bonne adresse qui était : Rue du 1er avril. S'il vous plaît, gardez tout ceci pour vous, ne dites pas aux grandes multinationales que c'est un poisson d'avril et que je suis un charlatan. Je vous en supplie.";
			}
			else {
				paragraphe.innerHTML = "Bonjour " + genre + " " + prenom + " " + nom + ". Malheureusement, l'accès vous a été refusé car ce site est momentanément indisponible. Ne vous inquiétez pas, le problème va être très rapidement réglé. Veuillez réessayer ultérieurement. Si la connexion est toujours impossible après quelques heures, veuillez contacter l'assistance pour avoir notre aide."
			}
			
		}
		
		
		
	
