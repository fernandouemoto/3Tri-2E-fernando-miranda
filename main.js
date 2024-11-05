    function criarCartao (categoria,pergunta,resposta){
    let container = document.getElementById('container')
    let article = document.createElement('article')
    article.className = 'cartao'
    article.innerHTML = `
        <div class="cartao-conteudo">
            <h3> ${ categoria} </h3>
            <div class="cartao-conteudo-pergunta">
                <p> ${pergunta} </p> 
            </div>
            <div class="cartao-conteudo-resposta">
                <p> ${resposta} </p>
            </div>
        </div>
    `
    container.appendChild(article)
}

criarCartao('Biologia','Qual a funçâo da mitocondria','Produção de energia(ATP)')
criarCartao('Matematica','Como é definido um grupo?','é um conjunto de individuos que reunidos formam um todo')
criarCartao('Palmeiras','Tem mundial Rafael?','Nao')
criarCartao('Corinthians','Ele consegue jogar a libertadores?','obvio')