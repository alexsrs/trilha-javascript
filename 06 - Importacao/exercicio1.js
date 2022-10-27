/* uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1 a 100.
Faça um programa que receba os 5 numeros sorteados para os alunos e mostre o maior numero sorteado.
*/
const { gets, print } = require('./ext-func');

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numerosSorteado = gets();
    numerosSorteados.push(numerosSorteado);
}

let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numerosSorteado = numerosSorteados[i];
    if (numerosSorteado > maiorValor) {
        maiorValor = numerosSorteado;
    }
}

print(maiorValor);
