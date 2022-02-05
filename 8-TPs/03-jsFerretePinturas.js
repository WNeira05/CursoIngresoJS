/*3.
NEIRA WALTER
E/S TP3

Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let grados;
    let gradosConvertidos;
    let mensaje;

  
   
   grados = document.getElementById("txtIdTemperatura").value;
   grados = parseInt(grados);
   gradosConvertidos = (grados-32) * 5/9;
   
   mensaje = grados +" grados Fahrenheit son "; 
   mensaje += gradosConvertidos.toFixed(2) + " grados Centigrados";

   alert(mensaje);
}

function CentigradosFahrenheit () 
{
	let grados;
    let gradosConvertidos;
    let mensaje;

  
   
   grados = document.getElementById("txtIdTemperatura").value;
   grados = parseInt(grados);
   gradosConvertidos = (grados * 9/5) + 32;
   
   mensaje = grados +" grados celsius son "; 
   mensaje += gradosConvertidos.toFixed(2) + " grados Fahrenheit";

   alert(mensaje);

   
}
