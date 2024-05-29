function contagem() {
    // Obtém a referência ao elemento HTML com o id 'saida'
    let saida = document.getElementById('saida')
    // Obtém o valor numérico do campo de entrada com o id 'fnum' e converte para número
    let num = Number(document.getElementById('fnum').value)
    // Atualiza o conteúdo do elemento 'saida' adicionando um cabeçalho com a contagem
    saida.innerHTML += `<h2>Contando de 0 até ${num}</h2>`
    // Inicializa a variável de controle para a contagem
    let cont = 0
    // Loop enquanto 'cont' for menor ou igual a 'num'
    while (cont <= num) {
        // Adiciona o número atual seguido de um emoji de seta para a direita ao conteúdo do elemento 'saida'
        saida.innerHTML += ` ${cont} &#x1F449;`
        // Incrementa o contador 'cont'
        cont ++
    }
    // Adiciona um emoji de bandeira de chegada ao conteúdo do elemento 'saida' após a contagem
    saida.innerHTML += ` &#x1F3C1;`
}

/*
function contagem()	Declaração de uma função chamada 'contagem'.
let saida = document.getElementById('saida')	Obtém a referência ao elemento HTML com o id 'saida'.
let num = Number(document.getElementById('fnum').value)	Obtém o valor numérico do campo de entrada com o id 'fnum' e converte para número.
saida.innerHTML += <h2>Contando de 0 até ${num}</h2>	Atualiza o conteúdo do elemento 'saida' adicionando um cabeçalho com a contagem.
let cont = 0	Inicializa a variável de controle para a contagem.
while (cont <= num) {	Loop enquanto 'cont' for menor ou igual a 'num'.
saida.innerHTML += ${cont} &#x1F449;	Adiciona o número atual seguido de um emoji de seta para a direita ao conteúdo do elemento 'saida'.
cont ++	Incrementa o contador 'cont'.
saida.innerHTML += &#x1F3C1;	Adiciona um emoji de bandeira de chegada ao conteúdo do elemento 'saida' após a contagem.
*/