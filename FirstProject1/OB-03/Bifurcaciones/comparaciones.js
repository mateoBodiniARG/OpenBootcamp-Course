
// --> IGUALDAD <--
let a = 5
let b = "5"
// == IGUAL DEBIL - SOLO CHECKEA EL VALOR
// === IGUAL DEBIL - CHECKEA VALOR Y TIPO
if(a==b){ 
    console.log("A es igual a B (DEBIL)")
}
if(a===b){ 
    console.log("A es igual a B (ESTRICTO)")
}
//--------------------------------------------------------------------------------------------------------------------------------------
// DESIGUAL O QUE ES DIFERENTE
let c = 5
let d = "5"
if(c != d){
    console.log("C es diferente de D (DEBIL)")
}
if(c !== d){
    console.log("C es diferente de D (FUERTE)")
}
//--------------------------------------------------------------------------------------------------------------------------------------


// --> COMPARACIONES mayor que - menor que <--
let max = 10 
let min = 5

if(max > min){
    console.log("MAX es mayor que MIN")
}

if(max >= min){
    console.log("MAX es menor que MIN")
}