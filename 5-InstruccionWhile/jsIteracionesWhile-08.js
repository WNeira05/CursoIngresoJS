/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/

//NEIRA WALTER - WHILE 08 - DIV I
function mostrar()
{
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numeroIngresado;

	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta= true;

	while(respuesta == true)
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado >= 0)
		{
			sumaPositivos = numeroIngresado + numeroIngresado;
		}
		else
		{
			if(numeroIngresado < -1)
			{
				multiplicacionNegativos = numeroIngresado * numeroIngresado;
			}
		}

		respuesta = confirm("¿Desea ingresar otro numero?");
	}

	

	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;
}
//FIN DE LA FUNCIÓN

