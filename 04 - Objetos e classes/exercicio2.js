/* 
2 - Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura))
Instancie uma pessoa chamada josé que tenha 70kg de peso e 1,75 de altura e informe ao josé o valor do seu IMC
*/ 

class Pessoa {
    nome;
    peso;
    altura;
    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularImc(){
       // let imc = (this.peso /(this.altura*this.altura));
       // return imc.toFixed(2);
       // refatorando abaixo 
       return (this.peso /(this.altura*this.altura)).toFixed(2);
    }
    classificarImc(){
        const imc = this.calcularImc();
        if (imc<18.5){
                return 'Abaixo do peso';
            } else if (imc < 25){
                return 'com peso normal';
            } else if(imc<30){s
                return 'acima do peso';
            } else if(imc<40){
                return 'obeso';
            } else {
                return 'com obesidade grave';
            }
        }
}
function main() {
    const pessoa1 = new Pessoa('José', 70, 1.75);
    console.log('Olá', pessoa1.nome, 'seu IMC é',pessoa1.calcularImc(),'e você esta', pessoa1.classificarImc());
}

main();


