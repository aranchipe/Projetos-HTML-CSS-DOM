const input = document.querySelector('input')
const div = document.querySelector('div')
const root = document.querySelector('body')

fetch('https://restcountries.com/v3.1/all').then(function (resposta) {
    const promiseBody = resposta.json()

    promiseBody.then(function (body) {

        body.forEach(function (pais) {
            const nome = document.createElement('h2')
            nome.textContent = pais.name.common

            const regiao = document.createElement('span')
            regiao.textContent = pais.region
            regiao.classList.add('capital')


            const capital = document.createElement('span')
            capital.textContent = pais.capital
            capital.classList.add('capital')

            const populacao = document.createElement('p')
            populacao.textContent = pais.population

            const bandeira = document.createElement('img')
            bandeira.src = pais.flags.png

            input.addEventListener('keydown', function (event) {
                console.log(body)

                if (event.key !== 'Enter') {
                    return
                }

                const add = () => {
                    bandeira.classList.add('escondido')
                    nome.classList.add('escondido')
                    regiao.classList.add('escondido')
                    capital.classList.add('escondido')
                    populacao.classList.add('escondido')
                }

                const remove = () => {
                    bandeira.classList.remove('escondido')
                    nome.classList.remove('escondido')
                    regiao.classList.remove('escondido')
                    capital.classList.remove('escondido')
                    populacao.classList.remove('escondido')
                }


                if (input.value !== pais.name.common) {
                    add()
                }
                if (input.value === "") {
                    remove()
                }
                if (input.value === pais.name.common) {
                    remove()
                }
            })

            root.append(div)
            div.append(nome, regiao, capital, populacao, bandeira)
        })
    })


})