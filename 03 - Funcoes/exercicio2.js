function aplicarDesconto(valor, taxa) {
    return (valor - (valor *(taxa / 100)));
}

function aplicarJuros(valor, taxa) {
    return (valor + (valor *(taxa / 100)));
}

(function (){
    const precoEtiqueta = 100;
    const formaPagamento = 1;

    if (formaPagamento === 1) {
        console.log(aplicarDesconto(precoEtiqueta, 10));
    } else if (formaPagamento === 2) {
        console.log(aplicarDesconto(precoEtiqueta, 15));
    } else if (formaPagamento === 3) {
        console.log(precoEtiqueta);
    } else {
        console.log(aplicarJuros(precoEtiqueta, 10));
    }
}) ();