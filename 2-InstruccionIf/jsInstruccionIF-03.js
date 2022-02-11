function mostrar()
{
	/*Al ingresar una edad debemos informar 
	si la persona es mayor de edad, sino informar que es un menor de edad.
	NEIRA WALTER
	IF - 03*/

	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad >= 18)
	{

		mensaje = `La persona tiene ${edad} años, entonces es mayor de edad`;
		
		alert(mensaje);

	}

	else{
		mensaje = `La persona tiene ${edad} años, entonces es menor de edad`;
		
		alert(mensaje);
	}


}//FIN DE LA FUNCIÓN