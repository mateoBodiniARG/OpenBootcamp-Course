class Persona {
    _nombre
    _edad
    constructor(nombre, edad, isDeveloper){
      this.nombre = nombre
      this.edad = edad
      this.isDeveloper = isDeveloper
  
    }
  
    saludo() {
      console.log(`Hola! ${this._nombre}, tu edad es ${this._edad}, bienvenido! lenguaje: ${this.lenguaje}`);
    }
  }

  class  Desarrolador extends Persona{
    constructor(nombre,edad,lenguaje){
        super(nombre,edad)
        this.lenguaje = lenguaje
    }

    saludo(){ // Override ---- sobrescribir
        super.saludo()
        console.log(`Y soy desarollador de ${this.lenguaje}`)
    }
  }

  const newDev = new Desarrolador("Marvo", 34,"Javascript")
  console.log(newDev)
  newDev.saludo()


// Polimorfismo => Varias formas 

