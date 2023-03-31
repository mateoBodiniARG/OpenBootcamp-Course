// Que son las funciones, como se declaran y como se utilizan
const nom = "Marvo"

// saludar("Marvo")
saludar(nom)
function saludar(nombre){
    console.log(`Hola ${nombre}`)
}

///

let nombre_2 = "Juan"

despedir(nombre_2)

function despedir(n) {
    n = "Diego"
    console.log(`Adios ${n}`)
}

///

let persona = {nombre: "Mateo", apellido: "Bodini"}
console.log(persona)


function saludarPersona (objeto){
    objeto.apellido = "Gonzalez"
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`)
}
saludarPersona(persona)
 

////////////

function imprimeNumero(numero = 7){ // --> Parametros por defecto
    console.log(numero)
}
imprimeNumero() // --> No le pasamos nada, y usa 7 por defecto

/////

 function imprimir(...parametros){
    console.log(parametros)
 }

imprimir(1,2,3,4,"hola", {id:9})

////

function suma(...nums){
    return (nums.reduce((a,b) => a + b ))
}
const s = suma(1, 2, 10, 10)
console.log(s)

////
let variable = "hola"

function multiplicar(a=0, b=0){
    console.log(variable)
    let variable_interna = "adios"
    return a * b
}

console.log(variable_interna)

console.log(multiplicar(4,9))
