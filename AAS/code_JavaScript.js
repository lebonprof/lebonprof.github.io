
		function controle() {
			var teamchat=document.getElementById ("iteamchat").value;
			var teamchien=document.getElementById("iteamchien").value;
			var teamlesdeux=document.getElementById("ilesdeux").value;
			
				if (document.getElementById("iteamchien").checked)
				alert("C'est cool! Tu adores le meilleur ami de l'homme!");
				else 
					if(document.getElementById("iteamchat").checked)
				alert("Woah! Tu adores les chats , vous devrez leur dire 'chat va?' plus souvent.") ;
				else
				alert("Il faudra choisir un jour !!!C'est chat vs chien un point c'est tout.");
			
			var date=document.getElementById("idate").value;
			var aliment=document.getElementById("ialiment").value;
			var jouer=document.getElementById("ijouer").value;
			let paragraphe=document.getElementById("a_remplir");
			paragraphe.innerHTML="Ton animal est né le " + date + " et il aime manger " + aliment + " et jouer à" + jouer + " ! Moi, vous voyez , j'ai un poisson-chat qui est né le 1er avril et ce qu'il adore c'est le thon et poursuivre les poissons panés !";
		}

