
const barraMaior = document.querySelector('.barraMaior')
const hamburguer = document.querySelector('.hamburguer')
const fechar = document.querySelector('.fechar img')
const imagens = document.querySelectorAll('.corpo img')
const modal = document.querySelector('.modal')
const imagemModal = document.querySelector('.foto img')
const modalFechar = document.querySelector('.modalFechar')
const botaoAnterior = document.querySelector('.anterior img')
const botaoProximo = document.querySelector('.proximo img')
const coraçãoModal = document.querySelector('.like')
const coraçãoFoto = document.querySelectorAll('.like1')

let arrayFotos = []


for (a = 0; a < imagens.length; a = a + 2) {
    arrayFotos.push(imagens[a])
}


function abrirBarra() {
    barraMaior.classList.remove('escondido')
}

function fecharBarra() {
    barraMaior.classList.add('escondido')
}


function fecharModal() {
    modal.classList.add('escondido')
}


arrayFotos.forEach(item => {
    item.addEventListener('click', () => {

        modal.classList.remove('escondido')
        imagemModal.src = item.src
        botaoProximo.classList.remove('escondido')
        botaoAnterior.classList.remove('escondido')

        if (imagemModal.src === arrayFotos[0].src) {
            botaoAnterior.classList.add('escondido')
        }

        if (imagemModal.src === arrayFotos[9].src) {
            botaoProximo.classList.add('escondido')
        }

        for (let i = 0; i < arrayFotos.length; i++) {
            if (arrayFotos[i].src === imagemModal.src) {
                if (!coraçãoFoto[i].classList.contains('escondido')) {
                    coraçãoModal.classList.remove('escondido')
                } else {
                    coraçãoModal.classList.add('escondido')
                }
            }

        }
    })
})


function proximo() {

    for (i = 0; i < arrayFotos.length; i++) {
        if (arrayFotos[i].src === imagemModal.src) {
            imagemModal.src = arrayFotos[i + 1].src
            break
        }

        if (imagemModal.src === arrayFotos[8].src) {
            botaoProximo.classList.add('escondido')
        }
    }

    botaoAnterior.classList.remove('escondido')

    for (let i = 0; i < arrayFotos.length; i++) {

        if (arrayFotos[i].src === imagemModal.src) {

            if (!coraçãoFoto[i].classList.contains('escondido')) {
                coraçãoModal.classList.remove('escondido')

            } else {
                coraçãoModal.classList.add('escondido')
            }
        }
    }
}


function anterior() {
    for (j = 0; j < arrayFotos.length; j++) {
        if (arrayFotos[j].src === imagemModal.src) {
            imagemModal.src = arrayFotos[j - 1].src
            break

        }
        if (imagemModal.src === arrayFotos[1].src) {
            botaoAnterior.classList.add('escondido')

        }
        if (imagemModal.src === arrayFotos[9].src) {
            botaoProximo.classList.remove('escondido')
        }
    }

    for (let i = 0; i < arrayFotos.length; i++) {

        if (arrayFotos[i].src === imagemModal.src) {

            if (!coraçãoFoto[i].classList.contains('escondido')) {
                coraçãoModal.classList.remove('escondido')

            } else {
                coraçãoModal.classList.add('escondido')
            }
        }
    }
}


function like() {

    for (k = 0; k < arrayFotos.length; k++) {
        if (arrayFotos[k].src === imagemModal.src) {
            if (coraçãoFoto[k].classList.contains('escondido')) {
                coraçãoFoto[k].classList.remove('escondido')
                coraçãoModal.classList.remove('escondido')
            } else {
                coraçãoFoto[k].classList.add('escondido')
                coraçãoModal.classList.add('escondido')
            }
        }
    }
}


coraçãoFoto.forEach(item => {
    item.addEventListener('click', function (event) {
        item.classList.add('escondido')
    })
})



hamburguer.addEventListener('click', abrirBarra)
fechar.addEventListener('click', fecharBarra)
imagemModal.addEventListener('dblclick', like)
botaoAnterior.addEventListener('click', anterior)
botaoProximo.addEventListener('click', proximo)
modalFechar.addEventListener('click', fecharModal)

