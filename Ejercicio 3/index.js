let numero, confirmacion, suma = 0;

do{
	numero = parseInt(prompt("Ingrese un numero"));

	while (Number.isNaN(numero) == true) {
		alert("Solo debe ingresar numeros");
		numero = paseInt(prompt("Ingrese un numero"));
	}

	suma = suma + numero; 

	confirmacion = confirm("¿Desea continuar?");
}
while(confirmacion == true);

document.write(suma);
