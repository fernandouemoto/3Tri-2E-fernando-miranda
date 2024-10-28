    function criarCartao (categoria,pergunta,resposta){
    let container = document.getElementById('container')
    let article = document.createElement('article')
    article.className = 'cartao'
    article.innerHTML = 'isso é um teste'
    container.appendChild(article)
}


criarCartao('Biologia','Qual a funçâo da mitocondria','Produção de energia(ATP)')

calculaIMC(80,1.65)