let texto, confirmacion, cadenaTexto = [], i=0;

do{
	texto = prompt("Ingrese un texto");
	cadenaTexto[i] = texto;
	i++;
	
	confirmacion = confirm("¿Desea continuar?") 
}
while(confirmacion == true);

for(let i = 0; i < cadenaTexto.length; i++){
	document.write(cadenaTexto[i] + "-");
}