// Metodos mas avanzados
// .map() .filter() .reduce()

let array = ["San sebastian", "Madrid", "Barcelona", "Alicante", "Bilbao"]

const val = array.forEach(v => {
    console.log(v)
})
console.log(val)
// ---------------------------------------------------------------------------------------------------//

// Array modificando cada uno de los valores originales - .map()
const newArray = array.map((valor, indice)=> `${indice + 1} - ${valor} `)

console.log(newArray)

// ---------------------------------------------------------------------------------------------------//

const listaObjetos = [
    { nombre: "Marvo", edad: 35 },
    { nombre: "Orka", edad: 34 },
    { nombre: "Miguel", edad: 28 },
    { nombre: "Lucia", edad: 3 },
    { nombre: "Amaia", edad: 29 } 
]

// const listaMayores = listaObjetos.filter(obj => {
//  if(obj.edad > 30) {
//         return true
//     } else {
//         return false
//     }
// })

   //  ↓↓ forma mas optima de hacer ↓↓  //

const personasMayores = listaObjetos.filter(obj => obj.edad > 30)
console.log(personasMayores)

const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Miguel")
console.log(nuevaLista)

// ---------------------------------------------------------------------------------------------------//

const valores = [3, 56, 23, 5, 90, 100]
const suma = valores.reduce((acumulado,cur,i,arrayOriginal)=>{
    console.log(acumulado)
    console.log(cur)
    console.log(i)
    console.log(arrayOriginal)
    return acumulado + cur
})
console.log(suma)