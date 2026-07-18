var numiniciais =[]
function clicada () {
    let numeroinreal = document.getElementById('numero1')
    let numeroreal = Number(numeroinreal.value)
    if (numeroreal > 0 && numeroreal <=100) {
    numiniciais.push(numeroreal)
    numeroinreal.value = ""
}else{
    alert ("Número inválido")
     numeroinreal.value = ""
}
}
function resultado () {
    if (numiniciais.length == 0) {
        alert ("Insira valores antes de continuar")
    } else {
    let resul = document.getElementById('res')
    let txtmenor = document.getElementById('menor')
    let txtmaior = document.getElementById('maior')
    let txtsoma = document.getElementById('soma')
    let txtmedia = document.getElementById('media')
    let quantidade = numiniciais.length
    let sortido = numiniciais.sort((a, b) => a - b)
    let soma = 0
    for (let i = 0; i < numiniciais.length; i++) {
            soma += numiniciais[i]
        }
    let media = soma/numiniciais.length    
    resul.innerText = `Ao todo temos ${quantidade} números cadastrados`
    txtmenor.innerText = `O Menor número é ${numiniciais[0]}`
    txtmaior.innerText = `O maior número é ${numiniciais[numiniciais.length - 1]}`
    txtsoma.innerText = `A soma dos números é igual a ${soma}`
    txtmedia.innerText = `A média dos números é ${media}`
    
}
}

