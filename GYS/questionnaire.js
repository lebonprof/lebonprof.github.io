function pochemon(){
	var random = 0;
	var nom = document.getElementById('nom').value;
	var pocheballe = document.getElementById('Nombre de Poche balle').value;
	 if(document.getElementById('capture').checked){
		  if(document.getElementById('Chatmon').checked){
			if(pocheballe != 0){
				random = Math.random() * 10;
				pocheballe -=1;
		  }
		}
	}
	var paragraphe = document.getElementById('paragraphe');
	console.log(random);
	if(random >=5){
		paragraphe.innerHTML = "Monsieur! Vous avez attraper un Pochemon légendaire! Regardez, "+nom+" est un Choisson d'Avrilmon!";
		document.getElementById('imginvi').style.display="block";
		document.getElementById('coucou').style.display="block";
		document.getElementById('lien').style.display="block";
	}
	else{
		paragraphe.innerHTML = "Dommage, vous n'avez pas attraper de Pochemon aujourd'hui... Vous devriez réessayer, il y a beaucoup de Chatmon en ce moment!";
	}
	
	
}