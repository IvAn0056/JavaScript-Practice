//Cuadrado
console.group("Cuadrado");
/* const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm."); */
const perCuadrado = (lado) => lado * 4;
// console.log("El perimetro del cuadrado es: " + perCuadrado + " cm.");
const areaCuadrado = (lado) => lado * lado;
// console.log("El area del cuadrado es: " + areaCuadrado + " cm2");
console.groupEnd();

//Triangulo
console.group("Triangulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const altura = 5.5;
// console.log(
//   "Los lados del triangulo miden: " +
//     ladoTriangulo1 +
//     " cm, " +
//     ladoTriangulo2 +
//     " cm, y " +
//     baseTriangulo +
//     " cm, con una altura de: " +
//     altura +
//     "cm."
// );
const perTriangulo = (ladoTriangulo1, ladoTriangulo2, baseTriangulo) => ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perimetro del triangulo es: " + perTriangulo + " cm.");
const areaTriangulo = (baseTriangulo, altura) => (baseTriangulo * altura)/2;
// console.log("El area del triangulo es: " + areaTriangulo + " cm2.");
console.groupEnd();

//Circulo
console.group("Circulo");
// const radio = 4;
// const diametro = radio * 2;
// const PI = Math.PI;
// console.log("El circulo tiene un radio de " + radio + " cm, un diametro de " + diametro + "cm.");
const diametro = (radio) => radio * 2;
const perCirculo = (radio) => diametro(radio) * Math.PI;
// console.log("El perimetro del circulo es: " + perTriangulo + " cm.");
const areaCirculo = (radio) => (radio * radio) * Math.PI;
// console.log("El area del circulo es: " + areaTriangulo + " cm2.");
console.groupEnd();

function calcPerCuadrado(){
  const input = document.getElementById("InCuadrado");
  const value = input.value;

  const perimetro = perCuadrado(value);
  alert(perimetro);
}
function calcAreaCuadrado(){
  const input = document.getElementById("InCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}
function calcPerTriangulo(){
  const input1 = document.getElementById("lado1");
  const value1 = parseInt(input1.value);
  const input2 = document.getElementById("lado2");
  const value2 = parseInt(input2.value);
  const input3 = document.getElementById("base");
  const value3 = parseInt(input3.value);

  const perimetro = perTriangulo(value1, value2, value3);
  alert(perimetro);
}
function calcAreaTriangulo(){
  const input1 = document.getElementById("base");
  const value1 = input1.value;
  const input2 = document.getElementById("altura");
  const value2 = input2.value;

  const area = areaTriangulo(value1, value2);
  alert(area);
}
function calcPerCirculo(){
  const input = document.getElementById("radio");
  const radio = input.value;

  const perimetro = perCirculo(radio);
  alert(perimetro);
}
function calcAreaCirculo(){
  const input = document.getElementById("radio");
  const radio = input.value;

  const area = areaCirculo(radio);
  alert(area);
}