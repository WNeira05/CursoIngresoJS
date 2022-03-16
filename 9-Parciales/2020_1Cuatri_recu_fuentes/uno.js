/*
Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total */

function mostrar()
{	
	let i;
	let tipoProducto;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let precioMaximoJabone;
	let banderaPrecioMaximoJabones;
	let fabricantePrecioMaximoJabones;
	let cantidadJabonesMaximo;
	let contadorAlcohol;
	let contadorBarbijo;
	let contadorJabon;
	let acumuladorAlcohol
	let acumuladorBarbijo;
	let acumuladorJabon;
	let mayorTipo;
	let promedioCompra;

	banderaPrecioMaximoJabones = false;
	contadorAlcohol = 0;
	contadorBarbijo = 0;
	contadorJabon = 0;
	acumuladorAlcohol = 0;
	acumuladorBarbijo = 0;
	acumuladorJabon = 0;







	for(i=0; i < 5; i++)
	{
		tipoProducto = prompt("Ingrese el tipo de producto");
		while(tipoProducto !="barbijo" && tipoProducto !="jabon" && tipoProducto !="alcohol")
		{
			tipoProducto = prompt("Error. Intente nuevamente");
		}

		precio = prompt("Ingrese el precio");
		precio = parseFloat(precio);
		while(isNaN(precio) || precio < 100 || precio > 300)
		{
			precio = prompt("Error, ingrese un precio valido");
			precio = parseFloat(precio);
		}

		cantidad = prompt("Ingrese cantidad");
		cantidad = parseInt(cantidad);
		while( cantidad < 1 || cantidad > 1000 || isNaN(cantidad) )
		{
			cantidad = prompt("Error. Ingrese cantidad");
			cantidad = parseInt(cantidad);
		}

		marca = prompt("Ingrese marca");

		fabricante = prompt("Ingrese fabricante");

		
		
		switch(tipoProducto)
		{
			case "alcohol":
				acumuladorAlcohol += cantidad;
				contadorAlcohol++;
				break;
				
				case "jabon":
					acumuladorJabon += cantidad;
					contadorJabon++;
					//a) Del más caro de los jabones, la cantidad de unidades y el fabricante
					
					if (precio > precioMaximoJabone || banderaPrecioMaximoJabones == false) 
					{
						precioMaximoJabone = precio ;
						fabricantePrecioMaximoJabones = fabricante;
						cantidadJabonesMaximo = cantidad;
						banderaPrecioMaximoJabones = true;
					}
					break;
			default:
				acumuladorBarbijo += cantidad; //c) Cuántas unidades de Barbijos se compraron en total 
				contadorBarbijo++;
				break;
		}





	}//FIN DEL FOR

	//b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
	if(acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon)
	{
		mayorTipo = "alcohol";
		promedioCompra = acumuladorAlcohol / contadorAlcohol;
	}
	else
	{
		if(acumuladorBarbijo >= acumuladorAlcohol && acumuladorBarbijo > acumuladorJabon)
		{
			mayorTipo = "barbijo";
			promedioCompra = acumuladorBarbijo / contadorBarbijo;
		}
		else
		{
			mayorTipo = "jabon";
			promedioCompra = acumuladorJabon / contadorBarbijo;
		}
	}

        

		document.write("la cantidad de unidades: " + cantidadJabonesMaximo +  " y el fabricante: " + fabricantePrecioMaximoJabones +   " del jabon mas caro" + "<br>");
		document.write("Del tipo de producto con más unidades en total de la compra, el promedio por compra es: "+ promedioCompra + "<br>");
		document.write("unidades de Barbijos se compraron en total: " + acumuladorBarbijo + "<br>");


}
