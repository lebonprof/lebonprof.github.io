function affichage_score()
{
    // Variables 
	var points=0;
    var rep1=document.getElementsByName('q1');
    var rep2=document.getElementsByName('q2');
    var rep3=document.getElementsByName('q3');
    var rep4=document.getElementsByName('q4');
    var rep5=document.getElementsByName('q5');
    var rep6=document.getElementsByName('q6');
    var rep7=document.getElementsByName('q7');
    var rep8=document.getElementsByName('q8');
    var rep9=document.getElementsByName('q9');
    var rep10=document.getElementsByName('q10');
    var repondu1=false;
    var repondu2=false;
    var repondu3=false;
    var repondu4=false;
    var repondu5=false;
    var repondu6=false;
    var repondu7=false;
    var repondu8=false;
    var repondu9=false;
    var repondu10=false;
	var paragraphe = document.getElementById ("a_remplir");
	
	// Comptages des points avec vérification de si on à répondu ou pas
	if ((rep1[0].checked)  (rep1[1].checked)  (rep1[2].checked))
    {
            repondu1=true;
    }
    
	if ((rep2[0].checked)  (rep2[1].checked)  (rep2[2].checked))
    {
            repondu2=true;
    }
    
	if ((rep3[0].checked)  (rep3[1].checked)  (rep3[2].checked))
    {
            repondu3=true;
    }
    
	if ((rep4[0].checked)  (rep4[1].checked)  (rep4[2].checked))
    {
            repondu4=true;
    }
    
	if ((rep5[0].checked)  (rep5[1].checked)  (rep5[2].checked))
    {
            repondu5=true;
    }
    
	if ((rep6[0].checked)  (rep6[1].checked)  (rep6[2].checked))
    {
            repondu6=true;
    }
    
	if ((rep7[0].checked)  (rep7[1].checked)  (rep7[2].checked))
    {
            repondu7=true;
    }
    
	if ((rep8[0].checked)  (rep8[1].checked)  (rep8[2].checked))
    {
            repondu8=true;
    }
    
	if ((rep9[0].checked)  (rep9[1].checked)  (rep9[2].checked))
    {
            repondu9=true;
    }
    
	if ((rep10[0].checked)  (rep10[1].checked)  (rep10[2].checked) (rep10[3].checked))
    {
            repondu10=true;
    }

    if (repondu1 && repondu2 && repondu3 && repondu4 && repondu5 && repondu6 && repondu7 && repondu8 && repondu9 && repondu10)
    {
    
	if (rep1[1].checked)
    {
        points=points+1
    }
   
   if (rep2[2].checked)
    {
        points=points+1
    }
   
   if (rep3[1].checked)
    {
        points=points+1
    }
    
	if (rep4[1].checked)
    {
        points=points+1
    }
    
	if (rep5[0].checked)
    {
        points=points+1
    }
   
   if (rep6[2].checked)
    {
        points=points+1
    }
   
   if (rep7[2].checked)
    {
        points=points+1
    }
   
   if (rep8[2].checked)
    {
        points=points+1
    }
   
   if (rep9[2].checked)
    {
        points=points+1
    }
   
   if ((rep10[0].checked) (rep10[1].checked) (rep10[2].checked))
    {
        points=points+1
    }
       paragraphe.innerHTML = 'Votre score est de '+ points +'points';
	   
    }
   
   else
    {
         paragraphe.innerHTML = 'Eh bah bravo tu réponds pas à tout..... débile'
    }
    }
}