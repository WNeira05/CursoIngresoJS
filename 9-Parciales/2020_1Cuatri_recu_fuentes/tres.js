/*
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas. */




function mostrar()
{
	let nombre;
	let edad;
	let nacionalidad;
	let genero;
	let estadoCivil;
	let respuesta;
	let temperatura;
	let temperaturaMaxima;
	let banderaTemperaturaMaxima;
	let nacionalidadMasTemperatura;
	let contadorSolterosMayores;
	let contadorMujeresSolterasViudas;
	let contadorPersonasTerceraEdad;
	let acumuladorEdadMujeres;
	let contadorMujeresCasadas;
	let promedioMujeresCasadas;

	contadorMujeresCasadas = 0;
	acumuladorEdadMujeres = 0;
	contadorPersonasTerceraEdad = 0;
	contadorMujeresSolterasViudas = 0;
	contadorSolterosMayores = 0;
	banderaTemperaturaMaxima = false;
    respuesta = true;

    while(respuesta == true)
        {
			nombre = prompt("Ingrese el nombre");
			
			edad = prompt("Ingrese su edad: ");
			edad = parseInt(edad);
			while(isNaN(edad))
			{
				edad = prompt("Edad incorrecta!! Ingrese su edad: ");
				edad = parseInt(edad);
			}

			nacionalidad = prompt("Ingrese su nacionalidad");

			genero = prompt("Ingrese el genero");
			while(genero != "f" && genero != "m")
			{
			genero = prompt("Error, reingrese el genero")
			}

			estadoCivil = prompt("Ingrese el estado civil");
			while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
			{
				estadoCivil = prompt("Error, reingrese el estado civil")
			}

			temperatura = prompt("Ingrese su temperatura: ");
			temperatura = parseFloat(temperatura);
			while(isNaN(temperatura))
			{
				temperatura = prompt("temperatura incorrecta!! Ingrese su temperatura: ");
				temperatura = parseFloat(temperatura);
			}
            //a) la Nacionalidad de la persona con mas temperatura.
			if (temperatura > temperaturaMaxima || banderaTemperaturaMaxima == false) 
        {
            temperaturaMaxima = temperatura;
            nacionalidadMasTemperatura = nacionalidad;
            banderaTemperaturaMaxima = true;
        }

			//b) Cuantos mayores de edad( más de 17) estan solteros
			switch(estadoCivil)
			{
				case "soltero":
					if(edad > 17)
					{
						contadorSolterosMayores++;
					}
					break;

				case "casado":
					if(genero == "f")
					{
						acumuladorEdadMujeres += edad;
						contadorMujeresCasadas++;
					}

			}

			//c) La cantidad de Mujeres que hay solteras o viudas.
			if(genero == "f")
			{
				if(estadoCivil == "soltero" || estadoCivil == "viudo")
				{
					contadorMujeresSolterasViudas++;
				}
			}
			//d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
			if(edad > 60 && temperatura > 38)
			{
				contadorPersonasTerceraEdad++;
			}


    
            respuesta = confirm("Quiere ingresar otro nombre?");
            
        }// FIN DEL WHILE

		//e) El promedio de edad entre las mujeres casadas.
		promedioMujeresCasadas = acumuladorEdadMujeres / contadorMujeresCasadas;

		document.write("la Nacionalidad de la persona con mas temperatura:" + nacionalidadMasTemperatura + "<br>");
		document.write("mayores de edad( más de 17) que estan solteros: " + contadorSolterosMayores + "<br>");
		document.write("cantidad de Mujeres que hay solteras o viudas: " + contadorMujeresSolterasViudas + "<br>");
		document.write("personas de la tercera edad con mas de 38 de temperatura: " + contadorPersonasTerceraEdad + "<br>");
		document.write("promedio de edad entre las mujeres casadas:" + promedioMujeresCasadas + "<br>");

}//FIN DE LA FUNCION
