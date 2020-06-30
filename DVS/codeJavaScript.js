function reponse(){
	let paragraphe =document.getElementById("a_remplir");
	var pseudo =document.getElementById("ipseudo").value
	var nbaleatoire=Math.floor(Math.random()*12)
	var signeAstro="rien_pour_l_instant"
	var img = document.createElement("img");
	img.src = "images/poissonChat.png";
	var block = document.getElementById("image");
	block.appendChild(img);
	if (nbaleatoire==0){signeAstro="Bélier"}
	else if(nbaleatoire==1){signeAstro="Taureau"}
	else if(nbaleatoire==2){signeAstro="Gémeaux"}
	else if(nbaleatoire==3){signeAstro="Cancer"}
	else if(nbaleatoire==4){signeAstro="Lion"}
	else if(nbaleatoire==5){signeAstro="Vierge"}
	else if(nbaleatoire==6){signeAstro="Balance"}
	else if(nbaleatoire==7){signeAstro="Scorpion"}
	else if(nbaleatoire==8){signeAstro="Sagittaire"}
	else if(nbaleatoire==9){signeAstro="Capricorne"}
	else if(nbaleatoire==10){signeAstro="Verseau"}
	else{signeAstro="Poissons"}
	
	paragraphe.innerHTML = pseudo+", notre logiciel d'analyse de personnalité (extrêmement fiable, plus de 8% de fiabilité!) a detecté que votre signe astrologique est "+signeAstro+". Pour fêter cela, on vous offre un super poisson chat d'avril !";

	
}