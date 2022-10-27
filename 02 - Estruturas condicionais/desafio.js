/* Faça um programa para calcular o valor de uma viajem 

você terá 5 variaveis, sendo elas:
1 - preço do etanol
2 - preço da gasolina
3 - O tipo de combustivel que seu carro esta usando
4 - Gasto médio do carro
5 - Distancia de viajem

imprima no console o valor que sera gasto nessa viajem
*/

const precoEtanol = 5.79; // em R$
const precoGasolina = 6.39; // em R$
let tipoCombustivel = 'etanol'; // etanol ou gasolina
const consumoMedio = 10; // em Km/l
let distancia = 790; // em KM
if (tipoCombustivel === 'etanol') {
    const gastoTotal = (distancia / consumoMedio) * precoEtanol;
    console.log('Gasto total R$: ', gastoTotal.toFixed(2), 'na compra de Etanol');
} else {
    const gastoTotal = (distancia / consumoMedio) * precoGasolina;
    console.log('Gasto total R$: ', gastoTotal.toFixed(2), 'na compra de Gasolina');
}