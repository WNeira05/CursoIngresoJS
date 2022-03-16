/*

Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro
*/ 



function mostrar()
{
  let tipoMaterial;
  let cantidadBolsas;
  let precioPorBolsa;
  let respuesta;
  let porcentaje;
  let acumuladorArena;
  let acumuladorCal;
  let acumuladorCemento;
  let importeTotalBruto;
  let TipoMasCantidadBolsas;
  let banderaPrecioMaximo;
  let precioMaximo;
  let tipoMasCaro;

  porcentaje = 0;
  acumuladorArena = 0;
  acumuladorCal = 0;
  acumuladorCemento = 0;
  respuesta = true;
  banderaPrecioMaximo = false;

  while(respuesta == true)
  {
    tipoMaterial = prompt("Ingrese tipo de material")
    while(tipoMaterial != "arena" && tipoMaterial != "cal" && tipoMaterial != "cemento")
    {
        tipoMaterial = prompt("Error. Ingrese tipo de material");
    }

    cantidadBolsas = prompt("Ingrese la cantidad de bolsas");
    cantidadBolsas = parseInt(cantidadBolsas);

    precioPorBolsa = prompt("Ingrese el precio por bolsa");
    precioPorBolsa = parseFloat(precioPorBolsa);
    while( isNaN(precioPorBolsa) || precioPorBolsa < 0)
    {
      precioPorBolsa = prompt("Error. Ingrese el precio por bolsa");
      precioPorBolsa = parseFloat(precioPorBolsa);
    }

    switch(tipoMaterial)
    {
      case "arena":
        acumuladorArena += cantidadBolsas;
        break;

      case "cal":
        acumuladorCal += cantidadBolsas
        break;

      default:
        acumuladorCemento += cantidadBolsas;
        break;

    }// fin switch


    //Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
    //Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.

    if(cantidadBolsas > 30)
    {
      porcentaje = 25
    }
    else
    {
      if( cantidadBolsas > 10)
      {
        porcentaje = 15
      }
      
    }
    //f) El tipo mas caro
    if(precioPorBolsa > precioMaximo || banderaPrecioMaximo == false )
    {
      precioMaximo = precioPorBolsa;
      tipoMasCaro = tipoMaterial;
      banderaPrecioMaximo = true;
      
    }

    respuesta = confirm("desea ingresar mas?");
  }//fin del while

  //d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.

  if(acumuladorCal > acumuladorArena && acumuladorCal > acumuladorCemento)
  {
    TipoMasCantidadBolsas= "Cal";
  }
  else
  {
    if(acumuladorArena > acumuladorCemento)
    {
      TipoMasCantidadBolsas = "arena";
    }
    else
    {
      TipoMasCantidadBolsas = "cemento"
    }
  }


    //a) El importe total a pagar , bruto sin descuento
    importeTotalBruto = cantidadBolsas * precioPorBolsa;

    document.write("El importe bruto es: " + importeTotalBruto + "<br>");
    document.write("El tipo con mas cantidad de bolsas es:" + TipoMasCantidadBolsas + "<br>");
    document.write("El tipo de material mas caro es: " + tipoMasCaro + "<br>");



//FALTA COMPLETAARRR


}
