/* O IMC - Indice de massa corporal é um critério da organização mundial de saúde para
dar uma indicação sobre a condição de peso de uma pessoa adulta.

formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritimo que dado o peso e a altura de um individuo mostre sua condição de acordo
com a tabela abaixo:

IMC em adultos condição:
- Abaixo de 18.5 - Abaixo do peso
- Entre 18.5 e 25 - Peso normal
- Entre 25 e 30 - Acima do peso
- Entre 30 e 40 - Obeso
- Acima de 40 - Obesidade grave
*/

let altura = 1.70;
let peso = 120;
let imc = (peso / (altura * altura));
console.log('IMC: ',imc.toFixed(1));

if (imc<18.5){
    console.log('Abaixo do peso');
    } else if (imc < 25){
        console.log('Peso normal');
    } else if(imc<30){s
        console.log('Acima do peso');
    } else if(imc<40){
        console.log('Obeso');
    } else {
        console.log('Obesidade grave')
    }
