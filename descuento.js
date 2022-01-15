
function calcularTotalDescuento(precio, descuento){
    const totalPagarPorcentaje = 100 - descuento;
    const totalPagarPrecio = precio * (totalPagarPorcentaje/100);
    return totalPagarPrecio;
}

function calcularTotalButton(){
    const precio = document.getElementById("precio").value;
    const descuento = document.getElementById("descuento").value;

    const total = calcularTotalDescuento(precio, descuento);
    document.getElementById("total").innerHTML = "$ " + total ;
}