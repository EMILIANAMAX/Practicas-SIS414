//PARTE 1 DE LA PRACTICA #1 
//NOMBRE: MAX EMILIANA PACCI COPA 
//FECHA: 03/04/2025
//CI: 6660208      RU: 113830



// Parte 1: JavaScript

// 1. Variables y Tipos de Datos
// Pregunta: Declara una variable nombre con tu nombre y otra edad con tu edad. Luego, muestra en consola:
// "Hola, mi nombre es [nombre] y tengo [edad] años."
let miNombre = "Max";
let miEdad = 20;
console.log("Hola! Soy " + miNombre + " y tengo " + miEdad + " años.");

// 2. Operadores
// Pregunta: Calcula el área de un rectángulo (base = 5, altura = 3) y muestra el resultado.
const b = 5;
const h = 3;
const resultadoArea = b * h;
console.log("El área es: " + resultadoArea);

// 3. Condicionales
// Pregunta: Crea una condición que verifique si un número es par o impar.
const valor = 4;
const esPar = valor % 2 === 0;
console.log(esPar ? valor + " es un número par" : valor + " es un número impar");

// 4. Bucles
// Pregunta: Usa un bucle for para imprimir los números del 1 al 5.
let contador = 1;
while (contador <= 5) {
  console.log("Número: " + contador);
  contador++;
}

// 5. Funciones
// Pregunta: Crea una función sumar que reciba dos números y devuelva su suma.
const sumarNumeros = function(x, y) {
  return x + y;
};
console.log("Resultado: " + sumarNumeros(5, 2));

// 6. Arrays
// Pregunta: Dado el array let frutas = ["manzana", "banana", "pera"], agrega "uva" al final y muestra el array.
let listaFrutas = ["manzana", "banana", "pera"];
listaFrutas[listaFrutas.length] = "uva";
console.log("Frutas: ", listaFrutas);

// 7. Objetos
// Pregunta: Crea un objeto usuario con las propiedades nombre (string) y edad (number), 
// posteriormente muestra la llave y el valor de ese objeto con el bucle correcto.
const perfil = {
  nombre: "Max",
  edad: 20
};

Object.entries(perfil).forEach(([key, value]) => {
  console.log(key + ": " + value);
});

// 8. Métodos de Arrays
// Pregunta: Dado let numeros = [1, 2, 3, 4];, usa un método para obtener un nuevo array con cada número multiplicado por 2.
const arrayNums = [1, 2, 3, 4];
const duplicados = arrayNums.map(x => x * 2);
console.log("Duplicados: ", duplicados);

// 9. Funciones Flecha
// Pregunta: Convierte esta función a una función flecha:
// function restar(a, b) { return a - b; }
const diferencia = (x, y) => x - y;
console.log("Diferencia: " + diferencia(8, 5));

// 10. Ejercicio Integrador
// Pregunta: Crea una función filtrarPares que reciba un array de números y devuelva solo los pares.
const soloPares = lista => lista.filter(e => e % 2 === 0);
console.log("Números pares: ", soloPares([1, 2, 3, 4]));
