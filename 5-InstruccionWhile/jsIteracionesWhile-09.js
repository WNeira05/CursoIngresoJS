/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
//NEIRA WALTER - WHILE 9 - DIV I

/*function mostrar()
{	
	let numeroIngresado;
	let respuesta;
	let maximo;
	let minimo;
	let banderaPrimerIngreso;

	respuesta = true;
	banderaPrimerIngreso = false;

	while(respuesta ==true)
	{
		numeroIngresado = prompt("Ingrese un numero: ");
		numeroIngresado = parseInt(numeroIngresado);

		if(banderaPrimerIngreso == false)
		{
			maximo = numeroIngresado;
			minimo = numeroIngresado;
			banderaPrimerIngreso = true
		}
		else
		{

			if(numeroIngresado>maximo)
			{
				maximo = numeroIngresado;
			}
			if(numeroIngresado<minimo)
			{
				minimo = numeroIngresado;
			}
		}

		respuesta = confirm("Desea ingresar otro numero?");
	}

	document.getElementById("txtIdMaximo").value = maximo;
	document.getElementById("txtIdMinimo").value = minimo;
	

}//FIN DE LA FUNCIÓN*/


function mostrar()
{	let numero;
	let respuesta;
	let numeroMaximo;
	let numeroMinimo;
	let banderaNumeroMinimo;
	let banderaNumeroMaximo

    respuesta = true;
	banderaNumeroMaximo = false;
	banderaNumeroMinimo = false;

    while(respuesta == true)
        {
            numero = prompt("INgrese un numero")
			numero = parseInt(numero);
			while( isNaN(numero))
			{
				numero = prompt("Error. INgrese un numero")
				numero = parseInt(numero);
			}

			
            respuesta = confirm("Quiere ingresar otro numero?");
            
        }// FIN DEL WHILE
		
		if (numero > numeroMaximo || banderaNumeroMaximo == false) 
		{
			numeroMaximo = numero;
			banderaNumeroMaximo = true;
		}

		if (numero < numeroMinimo || banderaNumeroMinimo == false) 
		{
			numeroMinimo = numero;
			banderaNumeroMinimo = true;
		}


		document.getElementById("txtIdMaximo").value = numeroMaximo;
		document.getElementById("txtIdMinimo").value = numeroMinimo;
		
}//FIN DE LA FUNCIÓN

/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
//NEIRA WALTER - WHILE 9 - DIV I