/* 
1 - Crie um programa que dado um numero exiba sua tabuada
*/


function multiplicar(num){
   for (let i = 1; i < 10; i++) {
        resultado = num * i;
        console.log(num,'x',i,'=',resultado);    
   }
}

function somar(num){
    for (let i = 1; i < 10; i++) {
        resultado = num + i;
        console.log(num,'+',i,'=',resultado);    
    }
}


function main(){
    const num = 3;
    multiplicar(num);
    console.log(' ');
    somar(num);
}



main();
