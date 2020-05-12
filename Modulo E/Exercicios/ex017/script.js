
function tabuada() {
    let valor = window.document.getElementById('valor')
    let res = window.document.getElementById('resultado')
    let css = window.document.getElementById('css')
    let sel = window.document.getElementById('select')
    
    if (valor.value.length == 0) {
        return res.innerHTML = 'Informe um valor para ser calculado!!!'
    }

    valor = Number(valor.value)

    // Limpar a região de resposta
 
    css.innerHTML = ''
    sel.innerHTML = ''

    // Formatação para o "css"
    
    for (let i = 1; i <= 10; i++) {
        css.innerHTML += `${valor} ‧ ${i} = ${valor*i} <br>`
    }

    // formatação para o "select"
    let c = 1
    while (c<=10) {
        let item = document.createElement('option') // Criar uma opção para o select - é necessário para o PHP
        item.text = `${valor} ‧ ${c} = ${valor*c}`  // texto da opção
        item.value = `tab${c}`                     // Valor da opção (PHP)
        sel.appendChild(item)
        c++
    }
}
