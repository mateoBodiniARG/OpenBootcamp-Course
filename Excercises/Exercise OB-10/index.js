import { sumar,multiplicar } from './matematicas/controller.js'
import chalk from 'chalk'

console.log(sumar(4,5))
console.log(multiplicar(1,2))

console.log(chalk.green(multiplicar(sumar(1,2), sumar(4,5))))