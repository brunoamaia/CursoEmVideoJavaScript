function calcular() {
    var ano = window.document.getElementById('ano')
    var ger = window.document.getElementsByName('radsex')
    var saida = window.document.getElementById('res')
    var datatual = new Date
    var anoatual = datatual.getFullYear()
    var sex = ''
    
    ano = Number(ano.value)

    if (ano < 30 ) {    // Ajustar a idade, caso digite apenas os 2 ultimos valores (91, 02, ...)
        ano += 2000
    } else if (ano < 100) {
        ano += 1900
    } 

    var idade = anoatual - ano 

    
    if (ger[0].checked ) {
        sex = 'mas'
    } else {
        sex = 'fem'
    } 

    if (idade < 0) {            // Valor errado
        saida.innerHTML = 'O ano informado é maior que que o ano atual. <br>Por favor, tente novamente!'

    } else if (idade < 3) {     // Bebê (0 à 2 anos)
        if (sex == 'mas') {
            saida.innerHTML = `Você nasceu em ${ano} e ainda é apenas um bebê. <br>`
            saida.innerHTML += `<img src="./src/bbh.png" alt="foto" id="foto"> `
        } else {
            saida.innerHTML = `Você nasceu em ${ano} e ainda é apenas uma bebê. <br>`
            saida.innerHTML += `<img src="./src/bbm.png" alt="foto" id="foto"> `
        }
        
    } else if (idade < 9) {     // Criança (3 à 8 anos)
        if (sex == 'mas') {
            saida.innerHTML = `Você é um menino com ${idade} anos.<br>`
            saida.innerHTML += `<img src="./src/crih.png" alt="foto" id="foto"> `
        } else {
            saida.innerHTML = `Você é uma menina com ${idade} anos.<br>`
            saida.innerHTML += `<img src="./src/crim.png" alt="foto" id="foto"> `
        }
        
    } else if (idade < 18) {    // Jovem / Adolescente  (9 à 17 anos)
        if (sex == 'mas') {
            saida.innerHTML = `Você já é um adolescente com ${idade} anos.<br>`
            saida.innerHTML += `<img src="./src/jvh.png" alt="foto" id="foto"> `
        } else {
            saida.innerHTML = `Você já é uma adolescente com ${idade} anos.<br>`
            saida.innerHTML += `<img src="./src/jvm.png" alt="foto" id="foto"> `
        }
    } else if (idade < 60) {    // Adulto (18 à 59 anos)
        if (sex == 'mas') {
            saida.innerHTML = `Você é um Homem com ${idade} anos.<br>`
            saida.innerHTML += `<img src="./src/adh.png" alt="foto" id="foto"> `
        } else {
            saida.innerHTML = `Você é uma Mulher com ${idade} anos.<br>`
            saida.innerHTML += `<img src="./src/adm.png" alt="foto" id="foto"> `
        }
        
    } else {                    // Idoso (acima de de 60)
        if (sex == 'mas') {
            saida.innerHTML = `Você é um senhor que chegou na melhor idade. Olhe só, já possui ${idade} anos.<br>Aproveite para fazer o que gosta!!!`
            saida.innerHTML += `<img src="./src/idh.png" alt="foto" id="foto"> `
        } else {
            saida.innerHTML = `Você é uma senhora que chegou na melhor idade. Olhe só, já possui ${idade} anos.<br>Aproveite para fazer o que gosta!!!`
            saida.innerHTML += `<img src="./src/idm.png" alt="foto" id="foto"> `
        }
    }
    
}