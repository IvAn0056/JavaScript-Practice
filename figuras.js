//Cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm.");
var perCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perCuadrado + " cm.");
var areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + " cm2");
console.groupEnd();

//Triangulo
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const altura = 5.5;
console.log(
  "Los lados del triangulo miden: " +
    ladoTriangulo1 +
    " cm, " +
    ladoTriangulo2 +
    " cm, y " +
    baseTriangulo +
    " cm, con una altura de: " +
    altura +
    "cm."
);
var perTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: " + perTriangulo + " cm.");
var areaTriangulo = (baseTriangulo * altura)/2;
console.log("El area del triangulo es: " + areaTriangulo + " cm2.");
console.groupEnd();

//Circulo
console.group("Circulo");
const radio = 4;
const diametro = radio * 2;
const PI = Math.PI;
console.log("El circulo tiene un radio de " + radio + " cm, un diametro de " + diametro + "cm.");
var perCirculo = diametro * PI;
console.log("El perimetro del circulo es: " + perTriangulo + " cm.");
var areaCirculo = (radio * radio) * PI;
console.log("El area del circulo es: " + areaTriangulo + " cm2.");
console.groupEnd();