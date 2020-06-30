function controle() {
	var prenom = document.getElementById("iprenom").value;
	var	poids =	document.getElementById("poids").value;
	var itype = document.getElementById("type1").value;

	if (document.getElementById("chat2").checked ) { 
		return document.getElementById("a_remplir").textContent = " C'est un chaton, les calculs ne sont pas valables !"; 
	}
	else {
		
		if(itype == "chat d interieur"){
			return document.getElementById("a_remplir").textContent = prenom + " , votre chat d'intérieur  doit manger " + Math.round(((50*poids)/300)*100) +"g de croquettes par jour." ;
		}
		else if(itype == "chat actif"){ 
			return document.getElementById("a_remplir").textContent = prenom + ", votre chat actif  doit manger  " + Math.round(((55*poids)/300)*100) +"g de croquettes par jour." ;
		}
		else if(itype == "chat très actif"){ 
			return document.getElementById("a_remplir").textContent = prenom + ", votre chat très actif doit manger  " + Math.round(((60*poids)/300)*100) +"g de croquettes par jour.";
		}
	
	}
	

}
	
	

			