
const modal = document.querySelector('.modal')
const imagemModal = document.querySelector('.modal img')
const imagens = document.querySelectorAll('.imagens img')

imagens.forEach(imagem => {
    imagem.addEventListener('click', function () {
        modal.classList.remove('escondido')
        imagemModal.src = imagem.src
    })
})

modal.addEventListener('click', () => {
    modal.classList.add('escondido')
})