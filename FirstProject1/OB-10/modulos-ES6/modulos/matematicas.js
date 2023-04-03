export const suma = (a,b) =>{
    return a+b
}

export const multiplica = (a,b) =>{
    return a*b
}

export const eleva = (a,b) =>{
    return a ** b
}

export const factorial = (a) =>{
    let factorial = 1
    for(let i = 1; i <= a; i++){
        factorial *= i
    }
    return factorial
}


export const nombre = "matematicas"