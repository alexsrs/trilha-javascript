/*   Abaixo Objetos
 
const pessoa = {
    nome: 'Alex Sandro',
    idade: 41,
    descrever: function (){
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa);

pessoa.altura = 1.72;
console.log(pessoa);

pessoa.descrever();

delete pessoa.idade;
console.log(pessoa);

pessoa['nome'] = 'teste';

console.log(pessoa);

Usando classes vem abaixo
*/

class Pessoa {
    nome;
    idade;
    anoDeNascimento;
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} eu nasci em ${this.anoDeNascimento}`);
    }
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

}


/*
const vitor = new Pessoa();
vitor.nome = 'Vitor J guerra';
vitor.idade = 25;

const renan = new Pessoa();
renan.nome = 'Renan J Paula';
renan.idade = 30;

const teste = new Pessoa('Jose',15);

console.log(vitor);
console.log(renan);
vitor.descrever();
renan.descrever();
teste.descrever();
*/

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const alex = new Pessoa('alex', 30);
const fernanda = new Pessoa('fernanda', 25);

compararPessoas(alex, fernanda);


