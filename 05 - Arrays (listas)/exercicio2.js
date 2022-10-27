/*
2 - Crie um programa que seja capaz de percorrer uma lista
de numeros e imprima cada numero par encontrado
*/

function main(){
    const numeros = [0,1,2,3,4,5,6,7,8,9,10];
    for (let i = 0; i < numeros.length; i++) {
        const num = numeros[i];
            if ((num % 2) === 0) {
                console.log(num);
            }
    }
}

main();
