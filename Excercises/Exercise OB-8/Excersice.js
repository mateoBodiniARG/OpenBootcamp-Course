
// Crea un archivo JS que contenga las siguientes líneas

// 1---- Una función sin parámetros que devuelva siempre "true"

// 2---- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

// 3---- Una función generadora de índices pares automáticos




// 1---- 
function alwaysTrue () {
    return true 
}
alwaysTrue() // True 


//2---- 
    async function imprimirMensaje() {
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log("Hola soy una promesa"); // Hola soy una promesa
  }  
  imprimirMensaje();

  
//3---- 
function* paresAutomaticos(){
    let id = 2
    while(true){
        yield id
        id += 2
        if(id > 10){
            break
        }
    }
    return "Fin pares automaticos"
}

const parAuto = paresAutomaticos()
console.log(parAuto.next().value) // 2
console.log(parAuto.next().value) // 4
console.log(parAuto.next().value) // 6
console.log(parAuto.next().value) // 8
console.log(parAuto.next().value) // 10
console.log(parAuto.next().value) // Fin de pares automaticos


