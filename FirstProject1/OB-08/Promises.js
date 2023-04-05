// Funciones asincronas 

miAsinc = () => {
    // Hace una llamada a una base de datos externa
    // Puede darnos algun error
}

const miPromesa = new Promise((resolve,reject) => {
    const i = Math.floor(Math.random() * 2)
    // Si esta todo correcto
    if(i !== 0){
        resolve()
    }else{
        reject()
    }
})

miPromesa.then(() => console.log("Se ha ejectuado de forma correcta"))
         .catch(() => console.log("ERROR"))
         .finally(() => console.log("Yo me ejecuto siempre"))















































        








