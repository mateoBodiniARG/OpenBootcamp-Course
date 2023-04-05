// metodos mas utilizados con strings

// Como obtener la longitud de un string
let cadena = "Hola soy un string"
console.log(cadena.length)

// obtener partes de strings
// slice() substring() 
let stringSlice = cadena.slice(0,10)
console.log(stringSlice)

let subString_str = cadena.substring(0,10)
console.log(subString_str)

//---------------------------------------------------------------------

// Reemplazar parte de una cadena de texto

let cadena2 = "Hola mi nombre es Marvo"
console.log(cadena2)

// al utilizar strings solo remplaza la primera instancia 
console.log(cadena2.replace('Marvo', 'Mateo'))

let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles."

// al utilizar strings solo remplaza la primera instancia 
console.log(texto_largo.replace('los', 'cinco'))

// al utilizar la expresion regular /g (global) remplaza todas las instancias
console.log(texto_largo.replace(/los/g,'cinco'))


