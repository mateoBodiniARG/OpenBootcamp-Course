const miFuncion = val =>{

    if(typeof val === NaN){
        return 2 * val
    }else{
        // return "Debes pasar un numero"
        throw new Error("El valor debe ser de tipo number")
    }
   
}
// const elDoble = console.log(miFuncion(3))

const numero = "8"
try{
    // Codigo que puede fallar
    console.log("Esta ejecutando de manera correcta")
    const doble = miFuncion(numero)
    console.log(doble)
} catch(e){
    //En caso de que falle, quiero ejecutes
    console.error(e)
    console.error("ERROR!")
} finally{
    console.log("Se va a ejecutar si hay algun error como tambien si no lo hay")
}

//Errores mas comunes: InternalError, SyntaxError, TypeError, RangeError y RefernceError 