window.onload = function() {
	
{
	 var flag = false;
	 var bound = document.querySelectorAll(".boundary");
	 
	 document.getElementById("start").addEventListener("mouseover",start);
	 document.getElementById("end").addEventListener("mouseover",end);
	 for (i =0; i<bound.length; i++)
	 {
		 bound[i].addEventListener("mouseover",allborders);
	 }
}


function allborders()
{
	
	var bound = document.querySelectorAll(".boundary");
	for (i = 0; i < bound.length; i++)
	{
		bound[i].className = "boundary youlose";
	}
	document.getElementById("start").addEventListener("click",reset);
}



function start()
{
	var bound = document.querySelectorAll(".boundary");
	for (i =0; i < bound.length; i++)
	{
		bound[i].classList.remove("youlose");	
	}
}


function end()
{
	flag = true;
	
	if(flag)
	{
		alert("Sorry you lost");
		
	}
	else
	{
		alert("You win!");
	}
}