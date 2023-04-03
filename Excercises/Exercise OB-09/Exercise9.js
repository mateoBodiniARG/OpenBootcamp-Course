


//   Crea un nuevo proyecto de Node
// 
// 1---- Instala la dependencia Winston
// 
// 2---- En el archivo index.js crea una función que devuelva un error con un mensaje personalizado
// 
// 3---- Registra el error en un archivo a través de un try...catch



// 1---- 
//Ya se ha instalado


// 2---- 

const personalizeError = val =>{
    if (typeof val !== "string"){
        throw new Error("Debes ingresar una cadena de texto no vacia")
    }else{
        return "Correcto!, has ingresado una cadena de texto de forma correcta"
    }
}

// console.log(personalizeError())

// 3----
try{
    console.log("Se esta ejecutando de forma correcta")
    const errorPers = personalizeError()
    console.log(errorPers)
}catch(e){
    console.error(e)
    console.log("ERROR! no haz introducido una cadena de texto o esta vacio")
}

