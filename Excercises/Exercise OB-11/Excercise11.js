// Crea un nuevo fichero JS que contenga las siguientes líneas
// 
// - Una clase llamada "Estudiante" que tenga:  ✅
// 
// - Una variable llamada nombre ✅
// 
// - Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS ✅
// 
// - Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas ✅
// 
// - Crea una nueva instancia de "Estudiante"  ✅
// 
// - Haz la llamada al método obtenDatos ✅

class Estudiante{
    constructor(nombre,asignaturas){
        this.nombre = nombre
        this.asignaturas = ["Javascript", "Html"," Css"]
    }
    obtenDatos() {
        return {
          nombre: this.nombre,
          asignaturas: this.asignaturas
        }
      }
}


const estudiante1 = new Estudiante("Marvo")
const datos = estudiante1.obtenDatos()

console.log(estudiante1) // ----> Estudiante { nombre: "Marvo", asignaturas: ['Javascript', 'Html', 'Css'] }

console.log(datos)  // ----> Estudiante { nombre: "Marvo", asignaturas: ['Javascript', 'Html', 'Css'] }


