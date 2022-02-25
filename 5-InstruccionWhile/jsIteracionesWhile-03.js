/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/

//NEIRA WALTER - WHILE 03 - DIV I

function mostrar()
{
	let clave;

	clave = prompt("Ingrese la clave")

	while(clave != "utn750")
	{
		alert("Clave incorrecta, vuelva a introducir la clave");
		clave = prompt("Ingrese la clave");
	}

	alert("Usted introdujo la clave correcta");
	
}//FIN DE LA FUNCIÓN
