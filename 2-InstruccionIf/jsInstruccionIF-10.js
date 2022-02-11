function mostrar()
{
	/*Al presionar el Bot&oacute;n, 
					asignar una nota RANDOM al examen y mostrar:
					"EXCELENTE" para notas igual a 9 o 10,
					"APROBO;" para notas mayores a 4,
					"Vamos, la proxima se puede" para notas menores a 4

	NEIRA WALTER
	IF - 10*/

	let nota;

	nota = Math.floor(Math. random()*10+1);

	if(nota >=9)
	{
		alert(nota + ": EXCELENTE");
	}
	
	else
	{
		if(nota >= 4 && nota < 9)
		{
			alert(nota + ": APROBO")
		}

		else
		{
			alert(nota + ": Vamos, la proxima se puede")
		}
	}




}//FIN DE LA FUNCIÓN