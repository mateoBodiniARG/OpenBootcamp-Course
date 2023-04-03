let factorial = 1
let i = 1
while(true){

    if(i <= 10){
        factorial*=i
        i++
    } else {
        break
    }
    console.log(factorial)
}