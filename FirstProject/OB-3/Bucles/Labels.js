// Labels (No muy utilizadas)

let unidades = 0
let decenas = 0

BucleDecenas:while(true){
    BucleUnidades: while(true){
    console.log(`El numero actual es : ${decenas}${unidades}`)
        unidades++
        if(unidades === 10){
            unidades = 0
            break BucleUnidades
        }
        if (decenas === 2) {
            break BucleDecenas
        }
    }
        decenas++
}