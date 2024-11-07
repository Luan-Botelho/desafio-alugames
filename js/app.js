let jogosAlugados = 0;

function contarEExibirJogosAlugados() {

    console.log (`Total de jogos alugados: ${jogosAlugados}`);
}




function alterarStatus(id) {

    let jogoClicado = document.getElementById(`game-${id}`);
    let imagem = jogoClicado.querySelector('.dashboard__item__img');
    let botao = jogoClicado.querySelector('.dashboard__item__button');
    let texto = jogoClicado.querySelector('.dashboard__item__name');

    if (imagem.classList.contains('dashboard__item__img--rented')){
        if (confirm(`Você tem certeza que deseja devolver o jogo ${texto.textContent}?`))
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        jogosAlugados--;

    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        jogosAlugados++

    }
        contarEExibirJogosAlugados();
}

    document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});




function essaPalavraEUmPalindromo () {
    let palavra = prompt ('Digite uma palavra');
    let separandoAsLetrasDaPalavra = palavra.split('');
    let palavraInvertida = separandoAsLetrasDaPalavra.reverse();
    palavraInvertida = palavraInvertida.join('');
    
    if (palavra == palavraInvertida) {
        console.log (`Essa palavra é um palindromo`);
    
    }
    else {
        console.log('Essa palavra não é um palindromo');
    }

}
essaPalavraEUmPalindromo();

function ordenandoNumeros (a, b, c , d) {

    let numerosOrdenados = [a , b , c, d].sort((a ,b) => a - b);
    console.log (`Números ordenados: ${numerosOrdenados.join(' , ')}`)
}

ordenandoNumeros( 10, 20 , 4, 5);