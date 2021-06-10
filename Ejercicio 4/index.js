let dni, confirmacion, division;
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

do {
    
    dni = parseInt(prompt("Ingrese un DNI entre 0 y 99.999.999"));

    while (Number.isNaN(dni) == true || dni < 0 || dni > 99999999){
        if (Number.isNaN(dni) == true){
            alert("Solo puede ingresar numeros");
            dni = parseInt(prompt("Ingrese un DNI entre 0  y 99.999.999"));
        }
        if (dni < 0 || dni > 99999999){
            alert("Solo puede ingresar un numero entre 0 y 99.999.999");
            dni = parseInt(prompt("Ingrese un DNI entre 0  y 99.999.999"));
        }
    }

    division = dni % 23;

    for (let i = 0; i <= letras.length; i++){
        if (division == i){
            document.write(dni + " = " + letras[i] + "<br>");
        }
    }

    confirmacion = confirm("¿Desea continuar?");

} while (confirmacion == true); 