// Set o conjuntos (parecidos a los arrays)
// Es un conjunto NO ordenado de valores UNICOS

const array = [1, 2, 3, 4, 5, 6, 1, "hola", { id:5 }]

const miSet = new Set(array)
console.log(array) //[ 1, 2, 3, 4, 5, 6, 1, 'hola', { id: 5 } ]
console.log(miSet) //Set { 1, 2, 3, 4, 5, 6, 'hola', { id: 5 } }

// .add() --> anadir elementos al set
miSet.add(9)
console.log(miSet) //Set { 1, 2, 3, 4, 5, 6, 'hola', { id: 5 }, 9 }

// delete() --> eliminar elementos del set 
miSet.delete("hola")
console.log(miSet) //Set { 1, 2, 3, 4, 5, 6, { id: 5 }, 9 }

// .has() --> saber si existe ese valor/elemento demtro del set
console.log(miSet.has(2)) //true

// .size --> length del set
console.log(miSet.size) // 8

miSet.forEach(valor=>{
    console.log(valor)
})

const it_miSet = miSet.values()
console.log(it_miSet)

const ar_miSet = [...miSet]
console.log(ar_miSet)

// .clear() --> eliminar todos los elementos/valores del set
miSet.clear()
console.log(miSet)