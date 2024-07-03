function showExplanation(id) {
    // Esconde todos os quadros de explicação
    var explicacoes = document.querySelectorAll('.explicacao');
    explicacoes.forEach(function(explicacao) {
        explicacao.style.display = 'none';
    });

    // Mostra o quadro de explicação selecionado
    var explicacaoSelecionada = document.getElementById(id);
    explicacaoSelecionada.style.display = 'block';
}
