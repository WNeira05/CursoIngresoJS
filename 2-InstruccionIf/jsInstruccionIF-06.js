function mostrar()
{
	/*Al ingresar una edad debemos informar si la persona es 
	mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o 
	niño (menor a 13 años).
	NEIRA WALTER
	IF - 06*/

	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad >= 18)
	{

		mensaje = `La persona tiene ${edad} años, es mayor de edad`;
		alert(mensaje);

	}

	else
	{

		if(edad >=13 && edad <=17) 
		{

		mensaje = `La persona tiene ${edad} años, es adolescente`;
		alert(mensaje);
		
		}
		else
		{

		mensaje = `La persona tiene ${edad} años, es un niño`;
		alert(mensaje);
		
		}
	}


}//FIN DE LA FUNCIÓN