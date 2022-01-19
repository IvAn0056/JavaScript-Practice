
function calcularCredito(IT, GF){
    var capCredito = (IT - GF) * 0.35;
    return capCredito;
}

function creditoButton(){
    const IT = document.getElementById("it").value;
    const GF = document.getElementById("gf").value;

    document.getElementById("result").innerHTML = "Usted tiene una capacidad de credito de: $" + calcularCredito(IT,GF);
}