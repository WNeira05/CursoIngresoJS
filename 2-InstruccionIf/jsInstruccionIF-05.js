function mostrar()
{
	/*Al ingresar una edad solo debemos informar si la persona
	NO es adolescente.

	NEIRA WALTER
	IF - 05*/

	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad <= 12 || edad >= 18)

	{

		mensaje = `La persona tiene ${edad} años, NO es adolescente`;
		
		alert(mensaje);

	}

}//FIN DE LA FUNCIÓN