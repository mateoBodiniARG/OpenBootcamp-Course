class Persona {
  constructor(nombre, edad, isDeveloper){
    this.nombre = nombre
    this.edad = edad
    this.isDeveloper = isDeveloper

  }

  saludo() {
    console.log(`Hola! ${this.nombre}, tu edad es ${this.edad}, bienvenido!`);
  }
}


const nueva__persona = new Persona("Juan", 23, true,)
console.log(nueva__persona)
nueva__persona.saludo()

// INICIALIZAR
let numero = 60
console.log(typeof numero)

// INSTANCIAR
let persona2 = new Persona("Maria", 34, false) 
console.log(typeof persona2)
console.log(persona2 instanceof Persona) 
// persona2 es una instancia de Persona = true
// instaceof -> similar a typeof para clases