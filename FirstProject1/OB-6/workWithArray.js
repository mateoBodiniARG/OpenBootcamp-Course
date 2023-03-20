// Como trabajar con array
let var1 = 45
let array = [1, "hola", false, {id:5},null, undefined, var1 ]

// Acceder a los valores de un array a traves de su posicion
// array[indice] => 0,1,2,3,4,5...
console.log(array[0])
console.log(array[1])
console.log(array[2])
//-------------------------------------------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------------------------------------------


// Metodos para introducir nuevos valores en nuestros arrays
// .push() .unshift => mutan el valor de nuestro array

// Valores al final
array.push("final")
console.log(array)

// Valores al comienzo 
array.unshift("Comienzo")
console.log(array)


//-------------------------------------------------------------------------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------------------------------------------------------------------------

// Metodos para eliminar valores en nuestros array
// .pop() .shift => Mutan el valor del array
const array2 = [1, 3, "hola", false]
//Elimina valores al final -> pop()
array2.pop()
console.log(array2)

//Elimina valores al comienzo -> shift()
array2.shift()
console.log(array2)

//-------------------------------------------------------------------------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------------------------------------------------------------------------


// Metodo para eliminar, modificar o anadir valores en el array
//splice()
const array3 = [1, 2, 3, 4, 5, 6]

// Eliminar valores .splice(indice, numValoresAEliminar)
array3.splice(2, 1)
console.log(array3)

// Anadir valores .splice(indice,0,valores)
array3.splice(2,0,"hola")
console.log(array3)
 
// Modificar valores (Indice, 1, valores)
array3.splice(2,1,3)
console.log(array3)

//-------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------