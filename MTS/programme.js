function programme() {
	var a1 = document.getElementById("a1").value;
	var a2 = document.getElementById("a2").value;
	var a3 = document.getElementById("a3").value;
	var valeur = 0;
	if (document.getElementById("nb10").checked) {
		valeur = 10;
	}
	else {
		 valeur = 20;
	}
	var paragraphe = document.getElementById("a_remplir");
		
	paragraphe.innerHTML = "J'ai vu 3 " + a1 + " bleus, à la queue leu-leu<br>"+
							"Marchant sur un fil....Poisson d'avril !<br>" +
							"<br>J'ai vu " + a2 + " faire du vélo<br>"+
							"Tout autour d'une île....Poisson d'avril ! <br>"+
							" <br>J'ai vu " + a3 + " avec des moustaches ! <br>"+
							"Et de très longs cils....Poisson d'avril ! <br>"+
							"<br>J'ai vu " + valeur + " corbeaux assis sur le dos<br>"+
							"D'un vieux crocodile....Poisson d'avril !<br>"+
							"<br>"+
							"J'avais prévu votre animal en 'a' regarder l'image dans votre onglet";
							
							
                 
}   

function reset() {
	document.getElementById("a1").value = "";
	document.getElementById("a2").value = "";
	document.getElementById("a3").value = "";
	valeur = 0;
	document.getElementById("nb10").checked = false;
	document.getElementById("nb20").checked = false;
	document.getElementById("a_remplir").innerHTML = "";
}	
					   