/*Al selecionar un destino , indicar el punto cardinal de nuestro pais 
en donde se encuentra Norte, Sur, Este u Oeste

NEIRA WALTER - SWITCH 7 - DIV I*/





function mostrar()
{
	let destino;
	destino = document.getElementById("txtIdDestino").value;

	switch(destino)
	{
		case "Bariloche":
			alert("Oeste");
			break;

		case "Cataratas":
			alert("Norte");
			break;

		case "Mar del plata":
			alert("Este");
			break;

		default:
			alert("Sur");
	}


}//FIN DE LA FUNCIÓN