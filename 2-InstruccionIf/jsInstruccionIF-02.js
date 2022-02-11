function mostrar()
{
	/* NEIRA WALTER
	IF - 02

	Al ingresar una edad debemos informar solo si la persona es mayor de edad*/

	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad >= 18)
	{

		mensaje = `La persona tiene ${edad} años, entonces es mayor de edad`;
		
		alert(mensaje);

	}



	

}//FIN DE LA FUNCIÓN