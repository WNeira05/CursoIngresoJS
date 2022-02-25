/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/

//WALTER NEIRA - WHILE 04 - DIV I

function mostrar()
{
	let numeroIngresado;

	numeroIngresado = prompt("Ingrese un numero entre el 0 y 9 inclusive");
	numeroIngresado = parseInt(numeroIngresado);

	while(numeroIngresado < 0 || numeroIngresado > 9)
	{
		numeroIngresado = prompt("Ingrese un numero entre el 0 y 9 inclusive");
		numeroIngresado = parseInt(numeroIngresado);
	}

	document.getElementById("txtIdNumero").value = numeroIngresado;
	
	
}//FIN DE LA FUNCIÓN