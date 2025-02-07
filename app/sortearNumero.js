const menorValor = 1;
const maiorValor = 1000;

const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio () {
    return parseInt(Math.random() * maiorValor + 1); //Math.random (com M maiúsculo mesmo) serve para gerar um número aleatório. 
    
}

// console.log('Número secreto é: ', numeroSecreto);
console.log('Abriu o console pra quê? Vai roubar no jogo não, né?');

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;