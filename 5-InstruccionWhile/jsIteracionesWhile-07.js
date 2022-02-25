/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.

WALTER NEIRA - WHILE 07 - DIV I
*/
function mostrar()
{
	let numeroIngresado;
	let respuesta;
	let suma;
	let promedio;
	let contador;

	respuesta = "si";//i=0
	//respuesta = true;
	suma = 0;
	contador = 0;

	while(respuesta == "si")//i<5
	{
		numeroIngresado = prompt("Ingrese un numero: ");
		numeroIngresado = parseInt(numeroIngresado);
		while(numeroIngresado <-100 || numeroIngresado > 100)
		{
			numeroIngresado = prompt("Reingrese otro numero: ");
			numeroIngresado = parseInt(numeroIngresado);
		}

		suma = suma + numeroIngresado;

		contador++;
		respuesta = prompt("Desea ingresar otro numero?"); //i++
	}

	promedio = suma/contador;

	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;




}//FIN DE LA FUNCIÓN