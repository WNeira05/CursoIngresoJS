/*Al seleccionar un destino informar si hace FRIO o CALOR en ese destino

NEIRA WALTER - SWITCH 8 - DIV I*/


function mostrar()
{
	let destino;
	destino = document.getElementById("txtIdDestino").value;

	switch(destino)
	{
		case "Cataratas":
		case "Mar del plata":
			alert("Hace calor");
			break;

		
		default:
			alert("Hace frio");
		
	}

}//FIN DE LA FUNCIÓN