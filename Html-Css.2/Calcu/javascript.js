const comprobarOpcionesSeleccionadas = () => {
    console.log(11)
    const inputs = document.querySelectorAll("input:checked");
    var valueFinal = 300;
    inputs.forEach( (obj) => {
        valueFinal += parseInt(obj.value);

    });
    document.querySelector("#coste").innerHTML = valueFinal + " €";
}


comprobarOpcionesSeleccionadas();

document.querySelectorAll("input").forEach( obj => {
    obj.addEventListener('click', comprobarOpcionesSeleccionadas);
})