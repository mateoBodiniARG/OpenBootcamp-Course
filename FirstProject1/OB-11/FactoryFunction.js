// const persona = {
//     nombre: "marvo",
//     edad: 20,
//     isDevloper: false,
//     saludo: () => {
//         console.log("Hola")
//     }
    
// }

// persona.saludo()

// const otra__persona = {
//     nombre: "Lucas",
//     edad: 21,
//     isDevloper: false,
//     saludo: () => {
//         console.log("Hola")
//     }
// }

// otra__persona.saludo()

// Factory function
const creaPersona = (nombre, edad, isDevloper) => {
    return {
        nombre,
        edad,
        isDevloper,
        saludo: () =>{
            console.log("hello")
        }
    }
}

const nueva_persona = creaPersona("Juan", 23, false)
const nueva_persona2 = creaPersona("Roman", 29, true)
console.log(nueva_persona)
console.log(nueva_persona2)
