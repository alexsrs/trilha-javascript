function exibirNome(nome){
    return 'Meu nome é '+ nome;
}

function verificaMaioridade(idade){
    if (idade < 18) {
        return (', eu sou menor de idade');
    } else {
        return (', eu sou maior de idade');
    }
}

(function (){
    // console.log(exibirNome('Alex Sandro'));
    // console.log(verificaMaioridade(13));
console.log(exibirNome('Alex Sandro')+ verificaMaioridade(17));

})();