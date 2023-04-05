// Carga y sobre carga de funciones 

const saludar = () => {
    hola();
}

const hola = () => {
    console.log("Hola! soy la funcion hola()");
}

saludar();


//////Funcionamiento de carga de funciones:
/// 1. global()
/// 2. saludar() global()
/// 3. hola() saludar() global()
/// 4. saludar() global()
/// 5. global()

const recursiva = () => {
    recursiva()
} // Ha llegado al tamano maximo de call stack "sobrecarga"