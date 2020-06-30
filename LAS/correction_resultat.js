function test_0(){
	var reponse = document.getElementById("icat").value;
	var attention = document.getElementById("chat_ok");
	if (reponse != "chat") {
		attention.innerHTML ="Le test risque de ne pas vous correspondre.";
		alert("Ce site est consacré uniquement aux personnes faisant partie de la team #monAnimalFéticheEstLeChat.");
	}
	else {
		attention.innerHTML ="team #monAnimalFéticheEstLeChat";
		alert("Félicitation! Vous venez d'adhérer à la team #monAnimalFéticheEstLeChat! °(^-^)°");
	}
}

	
function resultat(){
	let chat = [document.getElementByName("activité").value, document.getElementByName("musique").value, document.getElementByName("matière").value, document.getElementByName("rêve").value];
	  
	var comparatif=0;
	var result="";
	
	var type = document.getElementById("type_chat");
	var paragraphe = document.getElementById("def_chat");
	var chat5=0;
		
	
	for (var i = 0; i < chat.length(); i++) {
        var nb_de_fois = 0;
             
        for (var j = 0; j < chat.length(); j++) {
            if (chat[i] == chat[j]){
                nb_de_fois = nb_de_fois+1;
            }
		}
		if (nb_de_fois > comparatif){ /*ça c'est pour voir si il y a 1 pt pour chaque personnalité et dans ce cas être un autre chat que les 4 "de base"*/
			result = chat[i]
			comparatif = nb_de_fois
		}
		if (nb_de_fois==comparatif){ /*ça c'est pour si il y a une égalité entre 2 personnalités*/
			chat5 = chat5+1
		}
	}
	if (chat5==4){
		type.innerHTML = "Vous êtes un Aristo-chat!";
		paragraphe.innerHTML = "Vous êtes une boule de poil très polyvalente avec une personnalité très complexe!\n Les gens vous apprécient et savent reconnaitre votre valeur. Cependant faites attention à ne pas prendre la grosse tête!\n"+ image/aristochat.jpg;
	}
	if (chat5>1){
		type.innerHTML = "Vous êtes un chat basique";
		paragraphe.innerHTML = "Vous êtes un chat des plus normal avec des atouts et des défauts... Sans spécialités particulières.\n Cependant, il est possible que ce test soit trop grossier pour sonder les finesses de votre personnalité.\n"+ image/normal.jpg;
	}
	else{ /*i1, i2, i3 et i4 sont les valeurs que j'ai donné aux 4 types de réponses dans la page HTML*/
		if (result=="i1"){
			type.innerHTML = "Vous êtes un Chat-Touilleur!";
			paragraphe.innerHTML = "Vous êtes une boule de poil absolument active, prête à rendre service et qui est bon public!\n Votre joie et votre bonne humeur sont contagieuses!\n"+ image/cook.jpg;
		}
		if (result=="i2"){
			type.innerHTML = "Vous êtes un Chat-Mallow!";
			paragraphe.innerHTML = "Vous êtes une boule de poil adorable, au point qu'on dirait que vous êtes resté un petit chaton.\n Vous êtes très tranquille et passez votre temps à dormir.\n Cependant, sachez qu'un peu de sport surtout pendant le confinement ne fait pas de mal!\n"+ image/cook.jpg;
		}
		if (result=="i3"){
			type.innerHTML = "Vous êtes un Chat-thon-D'avril!";
			paragraphe.innerHTML ="Vous êtes une boule de poil excellente nageuse qui passe son temps à rire et à faire des blagues aux autres!\n Il faut avouer qu'en plus d'être un clown hors pair, vous êtes aussi très bon public, vous vous amusez toujours d'un rien!\n Cependant, veillez à faire des pauses parfois pour vous... et aussi pour votre entourage.\n"+ image/chaton.jpg;
		}
		if (result=="i4"){
			type.innerHTML = "Vous êtes un Chat-gris-nez!";
			paragraphe.innerHTML ="Vous êtes un philosophe né et vous aimez vous repencher sur le passé.\n Vous êtes assez pessimiste et vous craignez de vous projeter vers l'avenir par peur d'être déçu.\n Ne vous inquiétez pas! Le corona ne vous touchera pas si vous respectez les gestes barrières! Ayez confiance! \n"+ image/depression.jpg;
		}
	}
}
