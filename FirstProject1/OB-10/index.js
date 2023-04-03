// const moduloMatematicas = require("./modulos/ModuloMatematicas")
// // const factorial = moduloMatematicas.factorial
// const { factorial } = moduloMatematicas


const {factorial,suma} = require("./modulos/ModuloMatematicas")

const fact = factorial(5)
console.log(fact)

const sum = suma(12,90)
console.log(sum)
