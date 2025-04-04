// 1. Variables y Tipos de Datos
let miNombre = "Max";
let miEdad = 20;
console.log("Hola! Soy " + miNombre + " y tengo " + miEdad + " años.");

// 2. Operadores
const b = 5;
const h = 3;
const resultadoArea = b * h;
console.log("El área es: " + resultadoArea);

// 3. Condicionales
const valor = 4;
const esPar = valor % 2 === 0;
console.log(esPar ? valor + " es un número par" : valor + " es un número impar");

// 4. Bucles
let contador = 1;
while (contador <= 5) {
  console.log("Número: " + contador);
  contador++;
}

// 5. Funciones
const sumarNumeros = function(x, y) {
  return x + y;
};
console.log("Resultado: " + sumarNumeros(5, 2));

// 6. Arrays
let listaFrutas = ["manzana", "banana", "pera"];
listaFrutas[listaFrutas.length] = "uva";
console.log("Frutas: ", listaFrutas);

// 7. Objetos
const perfil = {
  nombre: "Max",
  edad: 20
};

Object.entries(perfil).forEach(([key, value]) => {
  console.log(key + ": " + value);
});

// 8. Métodos de Arrays
const arrayNums = [1, 2, 3, 4];
const duplicados = arrayNums.map(x => x * 2);
console.log("Duplicados: ", duplicados);

// 9. Funciones Flecha
const diferencia = (x, y) => x - y;
console.log("Diferencia: " + diferencia(8, 5));

// 10. Ejercicio Integrador
const soloPares = lista => lista.filter(e => e % 2 === 0);
console.log("Números pares: ", soloPares([1, 2, 3, 4]));

