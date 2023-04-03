// - Un nuevo Set con los nombres de tu familia
// Creo un nuevo set con los nombres de los familiares
const nombres = new Set(['Lucas', 'Mateo', 'Gustavo', 'Marisa']);
console.log(nombres)


// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
// Hago un .add a nombres para agregar un integrante duplicado
nombres.add("Mateo")
console.log(nombres)


// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
//Añado Javascript a mi set llamado nombres
nombres.add("Javascript")
console.log(nombres)
