//helper
function par(numero){
    return (numero % 2 == 0);
}

const salariosMex = mexico.map(
    function (persona) {
        return persona.salary;
    }
);

const salariosMexSort = salariosMex.sort(
    function (a, b) {
        return a - b;
    }
);

//calcular mediana general
function medianaSal(lista){
    const mitad = parseInt(lista.length/2);

    if (par(lista.length)){
        return (lista[mitad-1] + lista[mitad])/2;
    }else{
        return lista[mitad];
    }
}

const medianaGeneralSal = medianaSal(salariosMexSort);

//mediana top 10%
const spliceStart = (salariosMexSort.length * 90) / 100; //Empezar en el 90% para obtener el top 10%
const spliceCount = salariosMexSort.length - spliceStart;

const salariosMexTop10 = salariosMexSort.splice(
    spliceStart, spliceCount,
);
const medianaTop10Sal = medianaSal(salariosMexTop10);

console.log(medianaGeneralSal, medianaTop10Sal);