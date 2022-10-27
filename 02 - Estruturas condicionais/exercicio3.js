/* Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

*/
const precoEtiqueta = 100;
const formaPagamento = 4;
let precoFinal = precoEtiqueta;

if (formaPagamento=== 1) {
    let precoFinal = (precoEtiqueta * 0.9);
    console.log(precoFinal.toFixed(2));    
} else if (formaPagamento===2){
    let precoFinal = (precoEtiqueta * 0.85);
    console.log(precoFinal.toFixed(2));
}else if (formaPagamento===4){
    let precoFinal = (precoEtiqueta * 1.1);
    console.log(precoFinal.toFixed(2));
} else {
    console.log(precoFinal.toFixed(2));
}