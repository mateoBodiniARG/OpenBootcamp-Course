// Metodos de cadenas de texto (parte 2)

let input = "Escorpio"
let db = "escorpio"

// toLowerCase() -- toUpperCase
console.log(input.toLowerCase())
console.log(input.toUpperCase())
console.log(input.toLocaleLowerCase() === db.toLocaleLowerCase())

// Formas de concatenar dos string
let str_1 = "Soy el primer string."
let str_2 = "Soy el segundo string"

console.log(str_1.concat(" ",str_2))
console.log(str_1 + " " + str_2)
console.log(`${str_1} ${str_2}`)

// Eliminar espacios al inicio y al final
let str3 = "    Hola soy un string con espacios.   "
console.log(str3.length)
//trim()
console.log(str3.trim().length) // elimina todos los espacios
console.log(str3.trimStart().length) //elimina espacios al comienzo
console.log(str3.trimEnd().length) // elimina espacios al final

// Obtener el caracter que hay en cierta posicion

let str4 = "Hola soy el string numero 4"
console.log(str4.charAt(5))
console.log(str4[5])

//Obtener la posicion de una palabra dentro de un string

let str5 = "Hola soy Marvo y me gusta el surf. Mi nombre es Marvo"
console.log(str5.indexOf("Marvo"))
console.log(str5.lastIndexOf("Marvo")) // Nos da la ultima palabra
