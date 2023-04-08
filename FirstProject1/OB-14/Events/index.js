const hTexto = document.getElementById("hText")
console.log(hTexto)

hTexto.addEventListener("cambioTexto", evento =>{
    console.log(evento)
    hTexto.innerHTML = evento.detail.texto
    hTexto.style.color = evento.detail.color
})

const cambiarTexto = (nuevoTexto,color) =>{
    const evento = new CustomEvent("cambioTexto", {
        detail:{
            texto:nuevoTexto,
            color
        }
    })
    hTexto.dispatchEvent(evento)
}