/* Faça um programa para calcular o valor de uma viajem 

você terá 3 variaveis, sendo elas:
1 - preço do combustivel
2 - Gasto médio do carro
3 - Distancia de viajem
*/

const precoCombustivel = 5.79; // em R$
const consumoMedio = 9; // em Km/l
let distancia = 780; // em KM
let gastoTotal = (distancia/consumoMedio)*precoCombustivel;
console.log('Gasto total R$: ',gastoTotal.toFixed(2));