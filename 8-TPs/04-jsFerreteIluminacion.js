/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 


    NEIRA WALTER
    TP4

 */
    /*function CalcularPrecio () 
    {
        var cantidadDeLamparas;
        var precioDeLampara;
        var descuento;
        var precioFinal;
        var marca;
        var ingresosBrutos;
        var impuesto;
    
    
        cantidadDeLamparas = document.getElementById('txtIdCantidad').value;
        cantidadDeLamparas = parseInt(cantidadDeLamparas);
        marca = document.getElementById('Marca').value;
    
        precioDeLampara = 35;
        descuento = 0;
        precioFinal = precioDeLampara * cantidadDeLamparas;
    
        if(cantidadDeLamparas > 5)
        {
            descuento = 50;
        }
        else
        {
            if(cantidadDeLamparas == 5)
            {
                descuento = 30;
    
                if(marca == "ArgentinaLuz")
                {
                    descuento = 40;
                }
            }
            else
            {
                if(cantidadDeLamparas == 4)
                {
                    descuento = 20;
    
                    if(marca == "ArgentinaLuz" || marca =="FelipeLamparas")
                    {
                        descuento = 25;
                    }
                }
                else
                {
                    if(cantidadDeLamparas == 3) 
                    {
                        descuento = 5;
    
                        if (marca == "ArgentinaLuz") 
                        {
                            descuento = 15;
                        }
                        else 
                        {
                            if (marca == "FelipeLamparas") 
                            {
                                descuento = 10;
                            }    
                        }
                    }
                }
            }
            
        }
        
        precioFinal -= precioFinal * descuento / 100;
    
        if (precioFinal > 120 ) 
        {
            ingresosBrutos = 10;
            impuesto = precioFinal * ingresosBrutos / 100;
            precioFinal = precioFinal + impuesto;
            alert("Usted pago " + impuesto + " de IIBB");
        }
    
        document.getElementById('txtIdprecioDescuento').value = precioFinal;
    
    }*/

    //**************************************

    /*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

 function CalcularPrecio ()
 {
     var precio = 35;
     var lamparitas = 0;
     var marca;
     var descuento;
     var ingresosBrutos;
     var precioUni;
     var precioFinal;
 
     lamparitas = document.getElementById("txtIdCantidad").value;
     lamparitas = parseInt(lamparitas);
 
     marca = document.getElementById("Marca").value;
 
     precioUni = lamparitas * precio;
 /*reemplazar el switch(lamparitas) por un if*/
     if (lamparitas > 0 && lamparitas < 3 ) 
     {
         descuento = 0;
     }
     else 
     {
         if (lamparitas == 3) 
         {
             switch(marca)
             {
                 case "ArgentinaLuz":
                     descuento = 15;
                     break;
                 case "FelipeLamparas":
                     descuento = 10;
                     break;
 
                 default:
                     descuento = 5;
             }
         }
         else
         {
             if (lamparitas == 4) 
             {
                 switch(marca)
                 {
                     case "ArgentinaLuz":
                     case "FelipeLamparas":
                         descuento = 25;
                         break;
                 
                     default:
                         descuento = 20;
                 }
             }
             else
             {
                 if (lamparitas == 5) 
                 {
                     switch(marca)
                     {
                         case "ArgentinaLuz":
                             descuento = 40;
                             break;
 
                         default:
                             descuento = 30;
                     }
                 }
                 else
                 {
                     descuento = 50;
                 }
             }
         }
     }
     
     precioFinal = precioUni - precioUni * descuento / 100;
 
     if (precioFinal > 120) 
     {
         ingresosBrutos = precioFinal * 10 / 100;
         precioFinal = precioFinal + ingresosBrutos;
 
         alert("Usted pago $" + ingresosBrutos + " de ingresosBrutos");
     }
     document.getElementById('txtIdprecioDescuento').value = precioFinal;
 }