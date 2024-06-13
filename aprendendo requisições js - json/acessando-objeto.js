const estudante = {
    nome: 'victor',
    idade: 23,
    cpf: '13012152954',
    turma: 'ads-3b'
    }


    estudante.nome

    function exibeNomeEstudante(objEstudante, infoEstudante){
       return objEstudante[infoEstudante];

    }

    console.log(exibeNomeEstudante(estudante, 'nome'));
    console.log(exibeNomeEstudante(estudante, 'cpf'));