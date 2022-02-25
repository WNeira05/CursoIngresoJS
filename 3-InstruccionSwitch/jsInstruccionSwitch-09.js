/*una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion 
del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento

NEIRA WALTER - SWITCH 9 - DIV I*/

function mostrar()
{
	let estacion;
	let destino;
	let precioBase;
	let descuento = 0;
	let aumento = 0;
	let precioFinal;


	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;

	precioBase = 15000

	switch(estacion)
	{
		case "Invierno":
			if(destino == "Bariloche")
			{
				aumento = 20
			}
			else
			{
				if(destino == "Mar del plata")
			{
					descuento = 20
			}
				else
			{
					descuento = 10
			}
			}	
				break;

		case "Verano":
			if(destino == "Bariloche")
			{
				descuento = 20;
			}
			else
			{
				if(destino == "Mar del plata")
			{
					aumento = 20
			}
				else
			{
					aumento = 10
			}
			}
				break;

			default:
			if(destino == "Cordoba")
			{
				precioFinal = precioBase
			}
			else
			{
				aumento = 10
			}
				break;


	}

		if(aumento != 0)
		{
			precioFinal = precioBase + precioBase * aumento / 100;
		}
		else
		{
			if(descuento != 0)
			{
				precioFinal = precioBase - precioBase * descuento / 100;
			}
		}

		alert (`El precio final es $ ${precioFinal}`);


}//FIN DE LA FUNCIÓN