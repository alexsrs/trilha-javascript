function teste() {
    console.log('teste');
}

function sayMyName(name) {
    console.log('Meu nome é ' + name);
}

function quadrado(valor) {
    return valor * valor;
}

function incrementarJuros(valor, percentual) {
    const valorDeAcrecimo = (percentual / 100) * valor;
    return valor + valorDeAcrecimo;
}

function main() {
    teste();
    sayMyName('Alex Sandro');
    const quadradoDeDez = quadrado(10);
    console.log(quadradoDeDez);
    console.log('O valor total é R$ ' + incrementarJuros(100, 18));
}

main();

