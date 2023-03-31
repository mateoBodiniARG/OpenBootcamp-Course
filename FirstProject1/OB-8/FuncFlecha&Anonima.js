// funciones tipo flecha - funciones anonimas

const array = [1, 5, 6, 2, 7, 12, 8, 92]

const array2 = array.map((valor) => valor * 2)
 
console.log(array2)

///

const DobleDelValorV2 = valor => valor * 3  //Inicializar antes

console.log(DobleDelValorV2(3))
console.log(doble(6))

const array3 = array.map(DobleDelValorV2)
console.log(array3)

function doble(valor){
    return valor * 2
}