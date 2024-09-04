// Bucles: while y for

// Bucle while
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// Bucle for
for (let j = 0; j < 5; j++) {
    console.log(j);
}

// La sentencia "switch"
const color = 'verde';
switch (color) {
    case 'rojo':
        console.log('Color rojo');
        break;
    case 'verde':
        console.log('Color verde');
        break;
    default:
        console.log('Color desconocido');
}

// Funciones
function saludar(nombre) {
    return `Hola, ${nombre}!`;
}
console.log(saludar('Juan'));

// Expresiones de función
const sumar = function(a, b) {
    return a + b;
};
console.log(sumar(5, 3));

// Funciones Flecha, lo básico
const restar = (a, b) => a - b;
console.log(restar(10, 4));

// Especiales JavaScript
// Variable especial
const pi = 3.14159;
console.log(`El valor de pi es ${pi}`);

// Calidad del código (buena práctica: nombres descriptivos y formato consistente)
// Código de calidad
const calcularArea = (radio) => Math.PI * Math.pow(radio, 2);

// Debugging en el navegador
// Utiliza `console.log()` para depurar
const debug = (value) => {
    console.log('Valor:', value);
};
debug(42);

// Estilo de codificación
// Usa nombres descriptivos y formato consistente
function obtenerUsuario(nombre, edad) {
    return {
        nombre,
        edad
    };
}

// Comentarios
// Este es un comentario de una sola línea

/*
  Este es un comentario
  de varias líneas
*/

// Código ninja (trucos avanzados)
// Operador ternario
const esAdulto = (edad) => edad >= 18 ? 'Adulto' : 'Menor';
console.log(esAdulto(20));

// Automatización de pruebas con Mocha
// Instalación: npm install --save-dev mocha
// Ejemplo básico de prueba con Mocha
const assert = require('assert');
describe('Matemáticas', function() {
    it('debería sumar dos números correctamente', function() {
        assert.strictEqual(2 + 2, 4);
    });
});

// Polyfills y transpiladores
// Polyfill para Array.prototype.includes en navegadores antiguos
if (!Array.prototype.includes) {
    Array.prototype.includes = function(element) {
        return this.indexOf(element) !== -1;
    };
}

// Objetos: lo básico
const persona = {
    nombre: 'Ana',
    edad: 30
};
console.log(persona.nombre);

// Referencias de objetos y copia
const objeto1 = { valor: 1 };
const objeto2 = objeto1; // Referencia al mismo objeto
objeto2.valor = 2;
console.log(objeto1.valor); // 2

// Copia superficial de objeto
const objeto3 = { ...objeto1 };
objeto3.valor = 3;
console.log(objeto1.valor); // 2
console.log(objeto3.valor); // 3

// Recolección de basura
// JavaScript maneja la recolección de basura automáticamente, sin código especial

// Métodos de objeto, "this"
const coche = {
    marca: 'Toyota',
    mostrarMarca() {
        console.log(this.marca);
    }
};
coche.mostrarMarca(); // Toyota

// Constructor, operador "new"
function Animal(nombre) {
    this.nombre = nombre;
}
const perro = new Animal('Rex');
console.log(perro.nombre); // Rex

// Encadenamiento opcional '?.'
const usuario = {
    perfil: {
        nombre: 'Luis'
    }
};
console.log(usuario.perfil?.nombre); // Luis
console.log(usuario.direccion?.calle); // undefined

// Tipo Symbol
const simbolo = Symbol('descripcion');
console.log(simbolo.toString()); // Symbol(descripcion)

// Conversión de objeto a valor primitivo
const objetoPrimitivo = {
    valor: 10,
    [Symbol.toPrimitive](hint) {
        if (hint === 'number') {
            return this.valor;
        }
        return null;
    }
};
console.log(+objetoPrimitivo); // 10

// Tipos de datos
const numero = 123; // Número
const texto = "Hola"; // String
const booleano = true; // Boolean
const objeto = {}; // Objeto
const arreglo = []; // Array
const indefinido = undefined; // Undefined
const nulo = null; // Null

// Métodos en tipos primitivos
const cadena = 'JavaScript';
console.log(cadena.toUpperCase()); // JAVASCRIPT

// Números
const num = 123.456;
console.log(num.toFixed(2)); // 123.46

// Strings
const str = 'Hola Mundo';
console.log(str.length); // 10

// Arrays
const array = [1, 2, 3];
console.log(array[0]); // 1

// Métodos de arrays
const frutas = ['manzana', 'banana', 'cereza'];
console.log(frutas.join(', ')); // manzana, banana, cereza

// Iterables
const iterable = [1, 2, 3];
for (const valor of iterable) {
    console.log(valor);
}

// Map y Set
const map = new Map();
map.set('clave', 'valor');
console.log(map.get('clave')); // valor

const set = new Set();
set.add(1);
set.add(2);
console.log(set.has(1)); // true

// WeakMap y WeakSet
const weakMap = new WeakMap();
const obj = {};
weakMap.set(obj, 'valor');
console.log(weakMap.get(obj)); // valor

const weakSet = new WeakSet();
weakSet.add(obj);
console.log(weakSet.has(obj)); // true

// Object.keys, values, entries
const objetoEjemplo = { a: 1, b: 2 };
console.log(Object.keys(objetoEjemplo)); // ['a', 'b']
console.log(Object.values(objetoEjemplo)); // [1, 2]
console.log(Object.entries(objetoEjemplo)); // [['a', 1], ['b', 2]]

// Asignación desestructurante
const [x, y] = [1, 2];
console.log(x, y); // 1 2
const { a, b } = { a: 10, b: 20 };
console.log(a, b); // 10 20

// Fecha y Hora
const ahora = new Date();
console.log(ahora.toLocaleString()); // Fecha y hora actual

// Métodos JSON, toJSON
const objetoJson = { nombre: 'Juan', edad: 25 };
const jsonString = JSON.stringify(objetoJson);
console.log(jsonString); // {"nombre":"Juan","edad":25}
const objetoParseado = JSON.parse(jsonString);
console.log(objetoParseado); // { nombre: 'Juan', edad: 25 }
