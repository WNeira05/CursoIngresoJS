/*Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/




function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;
	let promedio;
	let respuesta;
	let banderaTemperatura;
	let temperaturaMaxima;
	let nombreMayorTemperatura;
	let acumuladorSoltero;
	let contadorSoltero;
	let contadorHombresViudos;
	let contadorViudo;
	let contadorTerceraEdad;
	let viudoSoltero;

	respuesta = true;
	banderaTemperatura = false; 
	contadorHombresViudos = 0;
	contadorViudo = 0;
	contadorSoltero = 0;
	contadorTerceraEdad = 0;
	acumuladorSoltero = 0;



	

	while(respuesta == true)
	{
		nombre = prompt("ingrese su nombre: ");

		edad = prompt("Ingrese su edad: ");
		edad = parseInt(edad);
		while(isNaN(edad))
		{
			edad = prompt("Edad incorrecta!! Ingrese su edad: ");
			edad = parseInt(edad);
		}

		sexo = prompt('Ingrese el sexo: "m" o "f" ');
		while(sexo != "m" && sexo != "f")
		{
			sexo = prompt('Error en el dato ingresado. Ingrese el sexo: "m" o "f" ');
		}

		estadoCivil = prompt('Ingrese el estado civil "soltero", "casado" o "viudo" ');
		while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
		{
			estadoCivil = prompt('Estado civil incorrecto. Ingrese el estado civil "soltero", "casado" o "viudo" ');
		}

		temperatura = prompt("Indique su temperatura: ");
		temperatura = parseFloat(temperatura);
		while(temperatura < 35 || temperatura > 42)
		{
			temperatura = prompt("temperatura incorrecta!! Indique su temperatura: ");
			temperatura = parseFloat(temperatura);
		}
		
		if(temperaturaMaxima < temperatura || banderaTemperatura == false) //PARA SACAR LA PERSONA CON MAYOR TEMPERATURA
		{
			temperaturaMaxima = temperatura; //LA PRIMER TEMPERATURA SE LE ASIGNA A TEMPERATURA MAXIMA
			nombreMayorTemperatura = nombre; // EL NOMBRE DE ESA PERSONA SE LE ASIGNA A LA VARIABLE "nombreMayorTemperatura"
			banderaTemperatura = true;

			//EN EL CASO QUE LA TEMPERATURA NO SEA MAYOR A LA QUE YA ESTA NO ENTRA EN ESTE IF
		}

		switch(estadoCivil)
		{
			case "viudo":
			if(edad > 17)
			{
				contadorViudo++; //CUENTA LA CANTIDAD DE VIUDOS
			}
	
			if(sexo == "m")
			{
				contadorHombresViudos++; //CUENTA LA CANTIDAD DE VIUDOS HOMBRES
			}
			break;
	
	
			case "soltero":
			if(sexo == "m") // SOLTEROS Y MASCULINOS CUANTA LA CANTIDAD, Y ACUMULA LA EDAD QUE VAN INGRESANDO
			{
				contadorSoltero++;
				acumuladorSoltero += edad;
				promedio = acumuladorSoltero / contadorSoltero;
			}
			break;
		}

		if(edad > 60 && temperatura > 38) //CUENTA LOS DE TERCER EDAD CON TEMPERATURA MAYOR A 38
		{
			contadorTerceraEdad++;
		}

		respuesta = confirm("Desea ingresar a otra persona?");
		
	}
	

	/*if( estadoCivil == "soltero")
	{
		
	}*/ 
	
	viudoSoltero = contadorHombresViudos + contadorSoltero;
	
	document.write( "El promedio de edad entre los hombres solteros es: " + promedio + "<br>")
	document.write( "El nombre de la persona con mas temperatura es: " + nombreMayorTemperatura + "<br>")
	document.write("Los mayores de edad que son viudos: " +  contadorViudo +  "<br>")
	document.write("La cantidad de hombres solteros o viudos es: " +  viudoSoltero + "<br>")
	document.write("Personas de la tercera edad con mas de 38°: " +  contadorTerceraEdad + "<br>")


	


}



/*function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperaturaCorporal;
	var respuesta;
	var temperaturaMaxima;
	var banderaTemperatura;
	var nombreMasTemperatura;
	var contadorViudo;
	var contadorSoltero;
	var acumuladorSolteros;
	var contadorHombreViudo;
	var contadorTerceraEdad;
	var promedio;
	var viudoSoltero;

	respuesta = "si";
	banderaTemperatura = false;
	contadorViudo= 0;
	contadorSoltero= 0;
	acumuladorSolteros= 0;
	contadorHombreViudo= 0;
	contadorTerceraEdad= 0;

	while(respuesta == "si")
	{
		nombre = prompt("Ingrese el nombre");
		edad = prompt("Ingrese su edad");
		edad = parseInt(edad);
		while(edad < 0 )
		{
			edad = prompt("Ingrese una edad valida");
			edad = parseInt(edad);
		}
		sexo = prompt("Ingrese el sexo: f, m, o nb");
		while(sexo != "f" && sexo != "m" && sexo != "nb")
		{
			sexo = prompt("Reingrese el sexo");
		}
		estadoCivil = prompt("Ingrese estado civil: soltero, casado, viudo");
		while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
		{
			estadoCivil = prompt("Ingrese un estado civil valido");
		}
		temperaturaCorporal = prompt("Ingrese la temperatura corporal");
		temperaturaCorporal = parseFloat(temperaturaCorporal);

		while(temperaturaCorporal < 35 || temperaturaCorporal > 45 )
		{
			temperaturaCorporal = prompt("Ingrese una temperatura corporal valida");
			temperaturaCorporal = parseFloat(temperaturaCorporal);
		}

		if(temperaturaMaxima < temperaturaCorporal || banderaTemperatura == false)
		{
			temperaturaMaxima = temperaturaCorporal;
			nombreMasTemperatura = nombre;
			banderaTemperatura = true;

		} 
		
		switch(estadoCivil)
		{
			case "viudo":
			if(edad > 17)
			{
				contadorViudo++;
			}
			
			if(sexo == "m")
			{
				contadorHombreViudo++;
			}
			
			break;
			case "soltero":
			if(sexo == "m")
			{
				contadorSoltero++;
				acumuladorSolteros += edad;

			}
			break;
			
		}
		
		if(edad > 60 && temperaturaCorporal > 38)
		{	
			contadorTerceraEdad++;
		}
		
		respuesta = prompt("¿Desea ingresar a otra persona?");
	}
	if(estadoCivil == "soltero")
	{
		promedio = acumuladorSolteros / contadorSoltero;
		

	}

	viudoSoltero = contadorSoltero + contadorHombreViudo;
	document.write("Nombre de la persona con mas temperatura: " + nombreMasTemperatura + "<br>");
	document.write("Cantidad de viudos mayores de edad : " + contadorViudo + "<br>");
	document.write("Cantidad de hombres solteros o viudos: " + viudoSoltero + "<br>");
	document.write("Cantidad de personas de tercera edad con temperatura + 38: " + contadorTerceraEdad + "<br>");
	document.write("Promedio entre hombres solteros :" + promedio + "<br>");
}*/
