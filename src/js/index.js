/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    - passo 1 - dar um jeito de pegar o elemento HTML dos botões
    - passo 2 - dar um jeito de identificar o clique do usuário no botão
    - passo 3 - desmarcar o botão selecionado anterior
    - passo 4 - marcar o botão clicado como se estivesse selecionado
    - passo 5 - esconder a imagem anteriormente selecionada
    - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
    - passo 7 - esconder a informação do dragão anteriormente selecionado
    - passo 8 - mostrar a informação do dragão referente ao botão clicado
*/
//- passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");
//- passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        console.log('clicou');

        //- passo 3 - desmarcar o botão selecionado anterior
        desativarBotaoSelecionado();

        //- passo 4 - marcar o botão clicado como se estivesse selecionado
        marcarBotaoselecionado(botao);

        //- passo 5 - esconder a imagem anteriormente selecionada
        esconderimagemativa();

        // - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
        mostrarImagemdefundo(indice);

        //- passo 7 - esconder a informação do dragão anteriormente selecionado
        escondendoInformacoesAtivas();

        //- passo 8 - mostrar a informação do dragão referente ao botão clicado
        mostrarInformacoe(indice);

    });
});





function marcarBotaoselecionado(botao) {
    botao.classList.add("selecionado");
}

function mostrarInformacoe(indice) {
    informacoes[indice].classList.add("ativa");
}

function escondendoInformacoesAtivas() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function mostrarImagemdefundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderimagemativa() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");

    botaoSelecionado.classList.remove("selecionado");
}

