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
function resultado () {
    let resul = document.getElementById('res')
    let txtmenor = document.getElementById('menor')
    let txtmaior = document.getElementById('maior')
    let quantidade = numiniciais.length
    let sortido = numiniciais.sort()
    resul.innerText = `Ao todo temos ${quantidade} números cadastrados`
    txtmenor.innerText = `O Menor número é ${numiniciais[0]}`
    txtmaior.innerText = `O maior número é ${numiniciais[numiniciais.length - 1]}`
    

}

