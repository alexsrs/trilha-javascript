// const eAzul = true;
// const eVermelha = false;

const numero = 16;

const isNumeroPar = (numero % 2) === 0; // mais utilizado 3 sinais de igual para igualdade, pq usando 2 sinais = ele ignora o tipo da variavel.

console.log(isNumeroPar);

if (isNumeroPar){
    console.log('Esse número é par');
} else {
    console.log('Esse número é impar');
}
/*
if (NumeroPar){
    console.log('Esse número é par');
}
if (!NumeroPar){
    console.log('Esse número é impar');
}
*/

const numero2 = 10;
const isNumeroDivisivelPor5 = (numero2 % 5) === 0;
console.log('-------');
console.log(numero2);

if (numero2 === 0) {
    console.log('O número é invalido');
} else if (isNumeroDivisivelPor5) {
    console.log('sim, é divisivel por 5');
    } else {
        console.log('não, não pode ser dividido por 5');
    }