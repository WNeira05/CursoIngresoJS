
function mostrar()
{
	// delaracion de varibales
	let i;
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let acumuladorBarbijos   
	let acumuladorAlcohol   
	let acumuladorJabon  
	let contadorBarbijo  
	let contadorAlcohol 
	let contadorJabon
	let precioAlcoholBarato;  
	let cantidadAlcoholBarato;  
	let fabricanteAlcoholBarato;
	let promedioCompra;
	let mayorTipo;
	let bandera; 
	let mensajeAlcohol;
	let mensajeB;
	let mensajeJabon; 

	acumuladorAlcohol = 0;  // TODOS LOS ACUMULADORES Y CONTADORES SE INICIALIZAN
	acumuladorBarbijos = 0;  // TODOS LOS ACUMULADORES Y CONTADORES SE INICIALIZAN
	acumuladorJabon = 0;  // TODOS LOS ACUMULADORES Y CONTADORES SE INICIALIZAN
	contadorAlcohol = 0; // (CONTADOR DE LAS COMPRAS)
	contadorBarbijo = 0; // (CONTADOR DE LAS COMPRAS)
	contadorJabon = 0;
	mensajeAlcohol = "a- No se compraron alcoholes";

	bandera = false; 

	// tengo que generar un bucle que se repita 5 veces
	// (tipo, precio, cantidad, marca y fabricante) 
	// (Utilizo un for porque conozco de antemano la cantidad de repeticiones)

	for(i = 0; i < 5; i++)
	{
		tipo = prompt('Ingrese tipo "barbijo", "jabon" o "alcohol": ' );
		while( tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol")
		{
			tipo = prompt('Tipo invalido. Ingrese tipo "barbijo", "jabon" o "alcohol": ' );
		}

		precio = prompt("Ingrese precio $(entre 100-300)");
		precio = parseFloat(precio);
		while( precio < 100 || precio > 300 || isNaN(precio) )
		{
			precio = prompt(" Precio invalido. Ingrese precio $(entre 100-300)");
			precio = parseFloat(precio);
		}

		cantidad = prompt("Ingrese cantidad, maximo 1000: ");
		cantidad = parseInt(cantidad);
		while( cantidad < 1 || cantidad > 1000 || isNaN(cantidad) )
		{
			cantidad = prompt("Error. Ingrese cantidad, maximo 1000: ");
			cantidad = parseInt(cantidad);
		}

		marca = prompt("Ingrese marca: ");
		fabricante = prompt("Ingrese el fabricante: ");

		switch(tipo)
		{
			case "alcohol":
				acumuladorAlcohol += cantidad;
				contadorAlcohol++;

				if(bandera == false || precioAlcoholBarato > precio)
				{
					precioAlcoholBarato = precio;
					cantidadAlcoholBarato = cantidad;
					fabricanteAlcoholBarato = fabricante;
					bandera = true;
				}
				break;

			case "barbijo":
				acumuladorBarbijos += cantidad;
				contadorBarbijo++
				break;

			case "jabon":
				acumuladorJabon += cantidad; // C) Tengo que acumular la cantidaad de jabones.
				contadorJabon++
				break;
		}


	}

	if( acumuladorAlcohol > acumuladorBarbijos && acumuladorAlcohol > acumuladorJabon )
	{
		//acumAlcohol sea el mayor
		mayorTipo = "alcohol";
		promedioCompra = acumuladorAlcohol / contadorAlcohol;
	}
	else
	{
		if( acumuladorBarbijos >= acumuladorAlcohol && acumuladorBarbijos > acumuladorJabon   )
		{
			//acumBarbijo sea el mayor
			mayorTipo = "barbijo";
			promedioCompra = acumuladorBarbijos / contadorBarbijo;

		}
	
		else
		{
			//acumJabon sea el mayor
			mayorTipo = "jabon";
			promedioCompra = acumuladorJabon / contadorJabon;
						
		}
	}

	if (contadorAlcohol != 0) // PUNTO A)
	{
		mensajeAlcohol = "a- Fabricante alcohol barato: " + fabricanteAlcoholBarato +
		"\ncantidad: "+ cantidadAlcoholBarato + 
		"\nprecio: " + precioAlcoholBarato;
	}
	
	mensajeB = "b- Tipo con mas unidades: " + mayorTipo + " Promedio: " + promedioCompra; // PUNTO B)
	mensajeJabon = "c- Unidades de jabon: " + acumuladorJabon; // PUNTO C)

	alert(mensajeAlcohol + "\n" + mensajeB + "\n" + mensajeJabon);

	//  A) Tengo que reconocer si el producto es alcohol y recordar el precio, la cantidad y el fabricante del de menor precio

	// B) Tengo que acumular las cantidades de unidades de cada tipo y la cantidad tipo de producto para sacar el promedio de comprar del acumulador mayor

	// C) Tengo que acumular la cantidaad de jabones.
}


//document.write("El alcohol mas economico es: " + alcohol + "<br>")