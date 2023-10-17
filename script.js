function calcular(){
    let nome = document.querySelector('input#idnome')
    let prealtura = document.getElementById('txtaltura')
    let altura = Number(prealtura.value)
    let prepeso = document.querySelector('input#txtpeso')
    let peso = Number(prepeso.value)
    let imc = peso / (altura**2)
    let situação = ''
    if (nome.value == '' || altura == '' || peso == ''){
        alert('Dados faltantes. Não é possível calcular.')
    } else {
        if (imc <= 18.5) {
            situação = 'abaixo do peso'
        } else if (imc > 18.5 && imc < 25) {
            situação = 'no peso ideal'
        } else if (imc >= 25 && imc < 30) {
            situação = 'levemente acima do peso'
        } else if (imc >= 30 && imc < 35) {
            situação = 'com obesidade'
        } else if (imc >= 35 && imc < 40) {
            situação = 'com obesidade severa'
        } else {
            situação = 'com obesidade mórbida'
        }
        resultado.innerHTML = `<b>${nome.value} tem IMC de ${imc.toFixed(1)} e está ${situação}</b>`
    }    
}
