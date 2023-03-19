// Unir dos listas .concat(lista2)

let lista1 = ["hola", 2, false, null]
let lista2 = ["adios", 8, true, undefined]

console.log(lista1.concat(lista2))

const lista3 = lista1.concat(lista2)

console.log(lista3)

// UNIR DOS LISTAS CON EL FACTOR DE PROPAGACION -> mas usado actualmente

const lista4 = [...lista1, ...lista2]
console.log(lista4)