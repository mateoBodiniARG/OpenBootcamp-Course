// bucles FOR


/* 
    for (inicializacion; condicion; actualizacion;){
        esto es el bucle // de cada una de las ejecuciones del bucle se va a ejecutar la actualizacion 
    }
*/
let i = "Hola mundo"
for (let i = 0; i < 10; i++){
    console.log(i)
}

let lista = [1, 4, 6, 2, 3, 7, 10, 12];

for(let i = 0; i<lista.length; i++){
    console.log(lista[i])
}

//estructura for of
for(let valor of lista){
    console.log(valor)
}

//estructura forEach

lista.forEach(valorLista =>{
    console.log(valorLista)
})

// estructura for in
let persona = {
    nombre: "Marvo",
    apellido: "Marvini",
    edad: 20,
    isDeveloper: true
}

for(atributos in persona){
    console.log(atributos)
    console.log(persona[atributos])
}