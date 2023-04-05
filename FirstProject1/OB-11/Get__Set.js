// Private -> #
// Solo se puede acceder desde dentro de la clase
class Persona {
    #nombre
    #edad

    // Protected -> _
// Solo se puede acceder desde dentro de la clase y desde clases Descendientes
    _isDeveloper = true
    constructor(nombre, edad){
      this.#nombre = nombre
      this.#edad = edad
    }
  
    saludo() {
      console.log(`Hola! soy ${this.nombre}, tengo ${this.edad} years, bienvenido!`);
    }
  
    obtenNombre(){
        return this.#nombre // Funcion getter -> nos permite acceder (de forma controlada) a algun atributo protegido 
    }

    obtenEdad(){
        return this.#edad
    }

    getEdad(){
        return this.#edad
    }

    setEdad(nuevaEdad){
        this.#edad = nuevaEdad
    }
}
  
const persona = new Persona("Marvo", 20)
// console.log(persona1)
// console.log(persona1.nombre)
persona.saludo()
console.log(persona.obtenNombre())
// console.log(persona.#obtenEdad()) 
// console.log(persona._isDeveloper())


// Getter -> metodos que nos permiten atributos o metodos privado o protegidos
const edad = persona.getEdad()
console.log(edad)


//Setter -> Metodos que nos permiten cambiar el valor de algunos de los atributos privados o protegidos 
persona.setEdad(23)
console.log(persona.getEdad())



