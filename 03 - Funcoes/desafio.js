/* O IMC - Indice de massa corporal é um critério da organização mundial de saúde para
dar uma indicação sobre a condição de peso de uma pessoa adulta.

formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritimo utilizando as funções, que dado o peso e a altura de um individuo mostre sua condição de acordo
com a tabela abaixo:

IMC em adultos condição:
- Abaixo de 18.5 - Abaixo do peso
- Entre 18.5 e 25 - Peso normal
- Entre 25 e 30 - Acima do peso
- Entre 30 e 40 - Obeso
- Acima de 40 - Obesidade grave
*/

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificacao(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc < 25) {
        return 'Peso normal';
    } else if (imc < 30) {
        s
        return 'Acima do peso';
    } else if (imc < 40) {
        return 'Obeso';
    } else {
        return 'Obesidade grave';
    }
}

function main() {
    const peso = 75;
    const altura = 1.75;
    const imc = calcularImc(peso, altura);
    console.log('IMC: ' + imc.toFixed(1) + ' - ' + classificacao(imc));
}

main();