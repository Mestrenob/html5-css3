

function clickMenu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}

function mudouTamanho() {
    if (window.innerWidth >= 768) {
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}

function clickJogos() {
    let jogos = document.querySelector('#subjogos')

    if (jogos.style.display == 'block') {
        jogos.style.display = 'none'
    } else {
        jogos.style.display = 'block'
    }
}

function clickBo2() {
    var mapas = document.querySelector('#submapas')
    if(mapas.style.display == 'block') {
        mapas.style.display = 'none'
    } else {
        mapas.style.display = 'block'
    }
}
