// Crea un archivo JS que contenga las siguientes líneas
// 
// - Una variable que contenga tu altura en centímetros (entero)
// 
// - Una variable que contenga tu altura en metros (número de coma flotante)
// 
// - Una variable que contenga tu peso en kilogramos (número de coma flotante)
// 
// - Una variable que contenga tu altura en metros redondeada hacia arriba
// 
// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo
// 
// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript

// altura en centímetros
let alturaEnCm = 175;

// altura en metros
let alturaEnMetros = alturaEnCm / 100;

// peso en kilogramos
let pesoEnKg = 70.5;

// altura en metros redondeada hacia arriba
let alturaRedondeada = Math.ceil(alturaEnMetros);

// peso en kilogramos redondeado hacia abajo
let pesoRedondeado = Math.floor(pesoEnKg);

// comparación de máximo valor de JS + 1
let maximoValor = Number.MAX_VALUE;
let esIgual = maximoValor + 1 === maximoValor;

console.log("Altura en centímetros:", alturaEnCm);
console.log("Altura en metros:", alturaEnMetros);
console.log("Peso en kilogramos:", pesoEnKg);
console.log("Altura redondeada:", alturaRedondeada);
console.log("Peso redondeado:", pesoRedondeado);
console.log("Máximo valor de JS + 1 es igual al máximo valor de JS:", esIgual);
