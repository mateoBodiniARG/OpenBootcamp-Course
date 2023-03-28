// - La fecha de hoy
const fecha = new Date()


// - La fecha de mi nacimiento
const fechaNac = new Date(2002, 9, 23)


// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const masGrande = fecha > fechaNac


// - Una variable que contenga el día de tu nacimiento
const diaNac = fechaNac.getDate()


// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mesNac = fechaNac.getMonth() + 1


// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
<<<<<<< HEAD
// <<<<<<< HEAD
const yearNac = fechaNac.getFullYear()  
// =======
// >>>>>>> 1ae68f7 (Exercise 7 3/3 solved)
=======
const yearNac = fechaNac.getFullYear()  
>>>>>>> e941b42 (Module 7 finish)
