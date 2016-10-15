window.onload = function()
{
	var flag = false;
	varbound = document.querySelectorAll(".boundary");
	
	document.getElementById("start").addEventListener("click",restart);
	document.getElementById("start").addEventListener("mouseover",start);
	document.getElementById("end").addEventListener("mouseover",end);
	
	for ( i = 0; i <bound.length; i++)
	{
		bound[i].addEventListener("mouseover",allborders);
	}

function allborders()
{
	flag = true;
	var bound = document.querySelectorAll(".boundary");
	
	for (i=0; i <bound.length; i++)
	{
		if(flag)
		{
			document.getElementById("status").textContent = "Sorry you lost";
		}else{
			document.getElementById("status").textContent = "You win";
		}
	}
}
}


