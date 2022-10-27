/* 
1 - Crie uma classe pra representar carros.
os carros possuem uma marca, uma cor e um gasto médio de combustível por kilometro rodado.
Crie um método que dado a quantidade de kilômetros e o preço do combustível nos dê o valor
gasto em reai para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    consumoMedio;
    calcularGasto(distancia, precoCombustivel){
        const gastoTotal = (distancia / this.consumoMedio) * precoCombustivel;
        console.log('Gasto total de R$:',gastoTotal.toFixed(2), 'para percorrer os', distancia, 'Kms, utilizando seu', this.marca, this.cor);
    }
    constructor(marca, cor, consumoMedio){
        this.marca = marca;
        this.cor = cor;
        this.consumoMedio = consumoMedio;
    }
}

function main(){

    const carro1 = new Carro('Palio', 'vermelho', 12);
    carro1.calcularGasto(330, 5,5);
}

main();


