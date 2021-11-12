var listaProdutos = [[0, 'Kit de Dados Azul', 'conjunto-dados-azul.jpg',false],[1,'Kit Miniaturas DnD','kit-miniaturas-rpg-dd.jpg',false]];
var carrinho = [];
window.onload = function(){
    montarCardProdutos();
}

function montarCardProdutos(){

    document.getElementById("div-produto").innerHTML = "";

    for(var i=0;i<listaProdutos.length;i++){
        var conteudo = "";
        conteudo += '<div class="div-card-produto">';
        conteudo += '<div class="div-card-produto-item">';
        conteudo += '<div class="div-card-produto-img">';
        conteudo += '<img src="../img/produtos/'+listaProdutos[i][2]+'"/>';
        conteudo += '</div>';
        conteudo += '<div class="div-card-produto-desc">';
        conteudo += listaProdutos[i][1];
        conteudo += '</div>';

        if(listaProdutos[i][3] == false){
            conteudo += '<div class="div-card-produto-bottom" onclick="comprar('+listaProdutos[i][0]+')">';
            conteudo += 'Comprar';
            conteudo += '</div>';
        }
        else{
            conteudo += '<div class="div-card-produto-bottom produto-carrinho">';
            conteudo += 'Adicionado ao Carrinho';
            conteudo += '</div>';   
        }
        conteudo += '</div>';
        conteudo += '</div>';

        document.getElementById("div-produto").innerHTML += conteudo;
    }
}

function comprar(id){
    listaProdutos[id][3] = true;

    carrinho.push(listaProdutos[id]);
    window.localStorage.setItem("carrinho",JSON.stringify(carrinho))

    montarCardProdutos();
    alert("comprar");
}

function mudaPaginaCarrinho(){
    window.location.href = "carrinho.html"
}