const obj = {
    id: 4,
    nombre: "Juan",
    isDeveloper: true,
    apellido: "Gonzalez",
    librosFav: ["El metodo","El codigo de la manifestacion"],
    "4-juegos": [1, 2, 3, 4]
}

console.log(obj.apellido)
console.log(obj["4-juegos"])

const prop = "isDeveloper"
console.log(obj[prop])

const obj2 = obj
console.log(obj2)

obj2.nombre = "Martin"
console.log(obj2.nombre)
console.log(obj.nombre) // Nos devuelve Martin, se modifica el obj inicial - le asigna el mismo direccion de memoria a dos variables diferentes

//////////  IMPORTANTE  //////////////

const obj3 = {...obj}
console.log(obj.nombre)
console.log(obj3.nombre)

obj3.nombre = "Gorka"

console.log(obj.nombre)
console.log(obj3.nombre)

//////////  IMPORTANTE  //////////////


//////////////////////////////////////////////////////////////////////////////
//Como ordenar listas de objetos en funcion de una propiedad
const listaPeliculas = [
    { titulo: " Lo que el viento se llevo ", anyo: 1939 },
    { titulo: " Titanic ", anyo: 1997 },
    { titulo: " Moana ", anyo: 2016 },
    { titulo: " El efecto mariposa ", anyo: 2004 },
    { titulo: " TED ", anyo: 2012 },

]

console.log(listaPeliculas)
 
// sort() -> MUTA EL VALOR DE LA LISTA ORIGINAL
const resListaPeliculas = listaPeliculas.sort((a,b)=>a.anyo - b.anyo)
console.log(resListaPeliculas)
