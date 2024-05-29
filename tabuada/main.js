function tabuada() {
    // Obtém a referência ao elemento HTML com o id 'saida'
    let saida = document.getElementById('saida')
    // Obtém o valor numérico do campo de entrada com o id 'fnum' e converte para número
    let n = Number(document.getElementById('fnum').value)

    // Define o cabeçalho da tabuada com o número fornecido
    saida.innerHTML = `<h2>Tabuada de ${n}</h2>`
    // Inicializa a variável de controle para a tabuada
    let c = 1
    // Loop enquanto 'c' for menor ou igual a 10
    while (c <= 10) {
        // Adiciona uma linha da tabuada ao conteúdo do elemento 'saida'
        saida.innerHTML += `${n} x ${c} = <strong>${n * c}</strong><br>`
        // Incrementa o contador 'c'
        c ++
    }
}



/*
function tabuada()	Declaração de uma função chamada 'tabuada'.
let saida = document.getElementById('saida')	Obtém a referência ao elemento HTML com o id 'saida'.
let n = Number(document.getElementById('fnum').value)	Obtém o valor numérico do campo de entrada com o id 'fnum' e converte para número.
saida.innerHTML = <h2>Tabuada de ${n}</h2>	Define o cabeçalho da tabuada com o número fornecido.
let c = 1	Inicializa a variável de controle para a tabuada.
while (c <= 10) {	Loop enquanto 'c' for menor ou igual a 10.
saida.innerHTML += ${n} x ${c} = <strong>${n * c}</strong><br>	Adiciona uma linha da tabuada ao conteúdo do elemento 'saida'.
c ++	Incrementa o contador 'c'.
*/