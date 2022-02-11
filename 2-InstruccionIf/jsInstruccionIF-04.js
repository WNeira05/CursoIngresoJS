function mostrar()
{
	/*Al ingresar una edad debemos informar 
	si la persona es adolescente, edad entre 13 y 17 años (inclusive) 

	NEIRA WALTER
	IF - 04*/

	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad >= 13 && edad <= 17)
	{

		mensaje = `La persona tiene ${edad} años, es adolescente`;
		
		alert(mensaje);

	}



}//FIN DE LA FUNCIÓN