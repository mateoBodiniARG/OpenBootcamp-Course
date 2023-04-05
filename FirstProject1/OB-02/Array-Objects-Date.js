//Listas , array , arreglo --> dos formas de llamar a los arrays
const lista1 = [1,"hola",true,undefined,null]
const lista2 = new Array (2,"string",true,undefined,null)
const lista3 = new Array (3)
lista3[0] = "soy el primer elemento del array, index 0"
const lista4 = [lista1,lista2,lista3];
console.log(lista1)
console.log(lista2)
console.log(lista3) 
console.log(lista4)

//Objetos
const movil = {
    altura: 10, 
    anchura: 5,
    marca: "Xiaomi",
    isWhite: false,
    contactos: ["Martin", "Lucas", "Marcelo"],
    tarjeta:{
        marca: "Sandisk",
        almacenamiento: 32
    }
}
//Definir nuevas propiedades al objecto movil:
movil.anyo = 2019;  
movil.marca = "Samsung" //Cambiamos el valor del atributo que hemos definido orginalmente
//para acceder a los objetos
console.log(movil.contactos) //nos devuelve ["Martin","Lucas","Marcelo"] 
console.log(movil.tarjeta.marca)  //Nos devuelve "Sandisk"


//Fechas
const ahora = new Date()
console.log(ahora) //Nos devuelve la fecha actual con el horario

const fecha_milis = new Date(10) //Se puede definir Utilizando los milisegundos

const fecha_cadena = new Date("march 25 2020") //Nos devuelve informacion de ese dia, por ejemplo que dia era
console.log(fecha_cadena)

const dia = ahora.getDate() // Nos devuelve el dia de hoy
const mes = ahora.getMonth() + 1 //Nos devuelve el mes. +1 porque inicia en 0
const anyo = ahora.getFullYear() //Nos devuelve el anyo actual 
console.log(dia, mes , anyo)