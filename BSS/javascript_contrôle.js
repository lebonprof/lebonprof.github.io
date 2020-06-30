	function controle(){
		var nom = document.getElementById("inom").value;
		var prenom = document.getElementById("iprenom").value;
		var carte_bleue = document.getElementById("icarte_bleue").value;
		var paragraphe = document.getElementById("a_remplir");
		
		var chat = "";
		if (document.getElementById('ioui').checked) {
			chat = document.getElementById('ioui').value;
		}
		if (document.getElementById('inon').checked) {
				chat = document.getElementById('inon').value;
				
		}
		
		if(chat == "non"){
			paragraphe.innerHTML = "Bonjour " + nom + " " + prenom + "! Votre numéro de carte bleue est le" + carte_bleue + ". Shame on you " + nom + " " + prenom + " !" + "Comment peut-on ne pas aimer les chats ?!?!";
		}
		else {
			paragraphe.innerHTML = "Bonjour " + nom + " " + prenom + "! Votre numéro de carte bleue est le " + carte_bleue;
			paragraphe.innerHTML = "Bonjour " + nom + " " + prenom + "! Votre numéro de carte bleue est le " + carte_bleue + ". Bien vu " + nom + " " + prenom + " !" + "Comme 66,8 % des francais tu aime les chats";
		}
	
	}