
function mediaAritmetica(lista){
    var sumaLista = 0;

    for (var i = 0; i < lista.length; i++){
        sumaLista += lista[i];
    }

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}



function medianaAritmetica(lista){
    lista.sort(function(a, b){return a-b});
    const mitadLista = parseInt(lista.length / 2);
    var medianaLista = 0;

    if (lista.length % 2 == 0){
        medianaLista = (lista[mitadLista - 1] + lista[mitadLista]) / 2;
    }else{
        medianaLista = lista[mitadLista];
    }

    return medianaLista;
}

function modaAritmetica(lista){
    const contarLista = {};

    lista.map( function (elemento){
        if (contarLista[elemento]){
            contarLista[elemento] += 1;
        }else{
            contarLista[elemento] = 1;
        }
    });
    const contarListaArray = Object.entries(contarLista).sort(
        function (a, b) {
            return a[1] - b[1];
        }
    );
    return contarListaArray[contarListaArray.length - 1][0];
}

function inputLista(){
    var listaNumeros = [];
    var input = document.getElementById("lista").value;
    var input1 = input.split(",");

    for (var i = 0; i < input1.length; i++){
        listaNumeros.push(parseInt(input1[i]));
    }
    return listaNumeros;
}

function calcularMedia(){
    var lista = inputLista();
    var resultado = mediaAritmetica(lista);
    document.getElementById("resultado").innerHTML = resultado;
}

function calcularMediana(){
    var lista = inputLista();
    var resultado = medianaAritmetica(lista);
    document.getElementById("resultado").innerHTML = resultado;
}

function calcularModa(){
    var lista = inputLista();
    var resultado = modaAritmetica(lista);
    document.getElementById("resultado").innerHTML = resultado;
}

