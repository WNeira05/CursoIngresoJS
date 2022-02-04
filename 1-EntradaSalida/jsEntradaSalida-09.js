/*
NEIRA WALTER
E/S - 09
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let aumento;
	let importeFinal;
	

	sueldo = parseInt(document.getElementById("txtIdSueldo").value); 
	aumento = sueldo * 10 / 100;

	importeFinal = sueldo + aumento;

	document.getElementById("txtIdResultado").value = importeFinal;


}
