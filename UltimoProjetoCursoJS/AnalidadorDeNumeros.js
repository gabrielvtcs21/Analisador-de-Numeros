var numiniciais =[]
function clicada () {
    let numeroinreal = document.getElementById('numero1')
    let numeroreal = Number(numeroinreal.value)
    if (numeroreal > 0 && numeroreal <=100) {
    numiniciais.push(numeroreal)
}else{
    alert ("Número inválido")
}
}
