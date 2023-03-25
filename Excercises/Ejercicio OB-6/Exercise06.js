// - Una variable que contenga la lista de la compra (mínimo 5 elementos) ✔
const listaCompra = ["Cocacola", "Queso", "Jamon", "Monster", "Milanesas"]

// - Modifica la lista de la compra y añádele "Aceite de Girasol" ✔
listaCompra.push("Aceite de Girasol")
console.log(listaCompra)

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.pop()
console.log(listaCompra)

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha) ✔
const listaPeliculas = [
    {titulo: "Creed 3",
     director: "Martin",
     fecha: new Date("2023-03-24")},
     {titulo: "Creed 2",
     director: "Miguel",
     fecha: new Date("2021-03-24")},
     {titulo: "Creed 1",
     director: "Juan",
     fecha: new Date("2010-03-24")}
]

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter) ✔
const posteriorFecha = listaPeliculas.filter(listaPelicula => listaPelicula.fecha > new Date( "2010-01-01" ))
console.log(posteriorFecha)

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map) ✔
const directoresPeliculas = listaPeliculas.map(d => d.director)
console.log(directoresPeliculas)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat) ✔
const titulos = listaPeliculas.map(p => p.titulo)
console.log(titulos)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación) ✔
const directoresTitulos = directoresPeliculas.concat(titulos)
console.log(directoresTitulos)


