// Formas de importar/exportar modulos
//1. CommonJS - require
// 2. Import ES6 - import


const suma = (a,b) =>{
    return a+b
}

const multiplica = (a,b) =>{
    return a*b
}

const eleva = (a,b) =>{
    return a ** b
}

const factorial = (a) =>{
    let factorial = 1
    for(let i = 1; i <= a; i++){
        factorial *= i
    }
    return factorial
}

module.exports = {
    suma,
    multiplica,
    eleva,
    factorial
}