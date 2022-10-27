/* Faça um algoritimo que dados as 3 notas tiradas por um aluno em um semestre da faculdade, calcule
   e imprima sua média e a sua classificaçãi conforme a tabela abaixo:

   Média é a soma de todas as notas divididas por 3

classificação
- média menor que 5, representa reprovação
- média entre 5 e 7, representa recuperação
- média acima de 5, aprovado   

*/

let nota1 = 7.9;
let nota2 = 7.8;
let nota3 = 7.8;

let media = (nota1 + nota2 + nota3) / 3;
console.log(media.toFixed(1));

if (media < 5) {
   console.log('Reprovado, tente novamente no proximo ano');
} else if (media <= 7) {
   console.log('Estude mais ! Você esta de recuperação');
} else {
   console.log('Parabéns ! Você foi aprovado ...');
}