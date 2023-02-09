

var botonElement = document.getElementById("botonClick") ;
var contador = 0;
botonElement.onclick = function () {
    contador++;
    contador = contador;
    document.getElementById("botonClick").innerHTML="visitas"

}
