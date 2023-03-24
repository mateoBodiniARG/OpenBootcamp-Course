//some()
const array = [3, 7, 2, 4, 7, 9, 42, 35, 7865, 23, -2]
const res = array.some(valor => valor < -3)
console.log(res) //false
///-------------------------------------------------------
const existe = array.some(valor => valor === 3)
console.log(existe) //true (porque existe el nro en el array)

//----------------------------------------------------------
const listaObjetos = [
    { nombre: "Marvo", edad: 21 },
    { nombre: "Orka", edad: 34 },
    { nombre: "Miguel", edad: 28 },
    { nombre: "Lucia", edad: 3 },
    { nombre: "Amaia", edad: 29 }
]
const existeMiguel = listaObjetos.some(valor => valor.nombre === "Miguel")
console.log(existeMiguel) //true --> porque existe el nombre "Marvo"

//----------------------------------------------------------
// Como obtener una lista a partir de un objeto iterable
const str = "Hola soy Marvo"

const ar_str = Array.from(str)
console.log(ar_str)