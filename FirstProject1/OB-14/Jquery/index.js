// $("Selector").action()

$( ()=>{

    $(".hideBtn").click(()=>{
        console.log("Ocultando...")
        $("h1").hide()
    })
    $(".showBtn").click(()=>{
        console.log("mostrando...")
        $("h1").show()
    })

})