
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()

    if (minuto < 10) {      // Ajustar a forma de aparecer os minutos
        minuto = `0${minuto}`
    }

    msg.innerHTML = `Agora são ${hora}:${minuto}.<br>`
    
    
    if (hora < 12) {
        msg.innerHTML += 'Bom Dia!!!'
        img.src = './src/fmanha.png'
        window.document.body.style.background = '#df9e02' //efa000
    } else if (hora <= 18) {
        msg.innerHTML += 'Boa Tarde!!!'
        img.src = './src/ftarde.png'
        window.document.body.style.background = '#2d6a87' //c3ddfe
    } else {
        msg.innerHTML += 'Boa Noite!!!'
        img.src = './src/fnoite.png'
        window.document.body.style.background = '#564a5f'
    }
}
