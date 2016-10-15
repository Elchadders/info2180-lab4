window.onload = function() {
	
   document.getElementById('boundary1').addEventListener("mouseover",allborders);
}     

function allborders()
{
	hit = true;
	var walls = document.querySelectorAll(".boundary");
	for (var i=0;i < walls.length; i++)
	{
		walls[i].className = "boundary youlose";
		document.getElementById("status").innerHTML = "You Loser.";
	}
}

