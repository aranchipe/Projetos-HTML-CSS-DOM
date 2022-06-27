const cepInput = document.querySelector('#cep')
const cidadeInput = document.querySelector('#cidade')
const ruaInput = document.querySelector('#rua')
const erro = document.querySelector('p')

cepInput.addEventListener('change', function () {
    if (cepInput.value.length !== 8) {
        erro.classList.remove('escondido')
    } else {
        erro.classList.add('escondido')
    }

    const promiseResposta = fetch('https://viacep.com.br/ws/' + cepInput.value + '/json/')
    promiseResposta.then(function (resposta) {
        const promiseBody = resposta.json()

        promiseBody.then(function (body) {
            console.log(body)
            cidadeInput.value = body.localidade
            ruaInput.value = body.logradouro
        })
    })
})


