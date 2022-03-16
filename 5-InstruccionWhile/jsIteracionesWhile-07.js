/*
2)De una compra debes ingresar una cantidad indeterminada de cortes de carne vacuna,
 validando los siguientes datos:

nombre del corte, precio, peso en kilogramos, tipo(con hueso o sin hueso)
a)informar el peso total de la compra.
b)el nombre del corte más caro de los sin hueso.
c)el nombre del corte más liviano de los con hueso.
*/
function mostrar()
{
	let respuesta;
    let corteCarne;
    let importe;
    let peso;
    let tipo;
    
	respuesta = true;

    while(respuesta == true)
        {
            corteCarne = prompt("Ingrese el corte de carne");

            importe = prompt("Ingrese el importe");
            importe = parseFloat(importe);
            while(isNaN(importe) || importe < 0)
            {
                importe = prompt("Error, ingrese un importe valido");
                importe = parseFloat(importe);
            }

            peso = prompt("Ingrese el peso en Kg");
			peso = parseFloat(peso);
			while(isNaN(peso) || peso < 0)
			{
				peso = prompt("Error. Ingrese el peso en Kg");
				peso = parseInt(peso);
			}

            tipo = prompt("Ingrese el tipo de carne: con hueso o sin hueso");
            while(tipo!="con hueso" && tipo!="sin hueso")
            {
                tipo = prompt("Tipo de carne incorrecto. Ingrese el tipo de carne: con hueso o sin hueso ");
            }
            
            
            
            
            
            
    
            respuesta = confirm("Quiere ingresar otro corte de carne?");
            
        }// FIN DEL WHILE
	
	

			document.write( + "<br>");
			document.write( +  "<br>");
			document.write( + "<br>");


}//FIN DE LA FUNCIÓN
