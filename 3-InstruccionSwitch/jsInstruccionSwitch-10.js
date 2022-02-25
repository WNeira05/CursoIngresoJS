//function mostrar()
//{
	/*una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche*/

//NEIRA WALTER - switch/IF 10 - DIV I
	
	/*let estacion;
	let destino;
	
	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;

	switch(estacion)
	{
		case "Invierno":
			if(destino == "Bariloche")
			{
				alert("Se Viaja");
			}
			else
			{
				alert("No se viaja");
			}
			break;

		case "Verano":
			if(destino == "Mar del plata" || destino == "Cataratas")
			{
				alert("Se viaja");
			}
			else
			{
				alert("No se viaja")
			}
			break;

		case "Otoño":
			alert("Se viaja");
			break;

		default:
			if(destino == "Bariloche")
			{
				alert("No se viaja");
			}
			else
			{
				alert("Se viaja");
			}
		

	}




}*/

//*******************************


function mostrar()
{
	/*una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche*/

//NEIRA WALTER - SWITCH 10 (ANIDAMIENTO SWITCH) - DIV I
	
	let estacion;
	let destino;
	
	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;

	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					alert("Se viaja");
					break;

				default:
					alert("No se viaja");
					break;
			}
				
				break;

		case "Verano":
			switch(destino)
			{
				case "Mar del plata":
				case "Cataratas":
					alert("Se viaja");
					break;

				default:
					alert("No se viaja");
					break;
			}
				break;

		case "Primavera":
			switch(destino)
			{
				case "Bariloche":
					alert("No se viaja");
					break;

				default:
					alert("Se viaja");
					break;
			}
			     break;

		default:
			{
				alert("Se viaja");
				break;
			}
			
		

	}


}
