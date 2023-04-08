const form = document.getElementById("formulario")
console.log(form)

form.addEventListener("submit", evento =>{
    console.log(evento)
    evento.preventDefault()
})