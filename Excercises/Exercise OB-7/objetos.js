// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const myDetails = {
    nombre: "Mateo",
    apellido: "Bodini",
    edad: 20,
    altura: 170,
    eresDesarrollador: true,
} 


// - Una variable que obtenga tu edad a partir del objeto anterior
const myAge = myDetails.edad
console.log(myAge)


// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const lista = [
    { 
        ...myDetails
     },
     {
        nombre: "Lucas",
        apellido: "Quaroni",
        edad: 21,
        altura: 185,
        eresDesarrollador: true,
     },
     {
        nombre: "Marcelo",
        apellido: "Benitez",
        edad: 18,
        altura: 165,
        eresDesarrollador: true,
     },
     {
        nombre: "Nicolas",
        apellido: "Pellegrini",
        edad: 16,
        altura: 190,
        eresDesarrollador: false,
     }
]


// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const listaAmigos = [...lista.sort((a,b) => a.edad - b.edad)]
console.log(listaAmigos)
