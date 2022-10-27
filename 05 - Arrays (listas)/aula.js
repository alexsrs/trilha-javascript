/* const alunos = ['joao', 'vitor', 'marina'];

console.log(alunos);

console.log(alunos[2]);
console.log(alunos[3]);

alunos.push('Renan')
console.log(alunos[3]);

alunos[4] = 'vinicius';

console.log(alunos);

console.log(alunos.pop());
console.log(alunos);


const notas =[];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

const soma = notas[0]+notas[1]+notas[2]+notas[3]+notas[4];
console.log(soma / 5);

console.log(notas.length);



const nome = 'vitor johansen guerra'
for (let i = 0; i < nome.length; i++) {
    
    console.log(nome[i]);
       
}
*/
const notas = [];

notas.push(5);
notas.push(6);
notas.push(9);
notas.push(4);
notas.push(7);
notas.push(8);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const element = notas[i];
    soma = soma + element;    
}
const media = soma / notas.length;
console.log('A média é', media.toFixed(1));
