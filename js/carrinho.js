var listaCarrinho = [];

window.onload = function(){
    listaCarrinho = JSON.parse(window.localStorage.getItem("carrinho"));
    console.log(listaCarrinho);
    montarCardProdutos();
}

function montarCardProdutos(){

    document.getElementById("table-carrinho").innerHTML = '<tr><td width="150px">Produto</td><td>Descrição</td></tr>';

    

    for(var i=0; i<listaCarrinho.length; i++){
        var conteudo = "";
        conteudo += '<tr>';
        conteudo += '<td>';
        conteudo += '<img src="../img/produtos/'+listaCarrinho[i][2]+'" height="150px" width="150px"/>';
        conteudo += '</td>';
        conteudo += '<td>';
        conteudo += listaCarrinho[i][1];
        conteudo += '</td>';
        conteudo += '<td>';
        conteudo += '<button onclick="removeItem('+i+')">Remover</button>';
        conteudo += '</td>';
        conteudo += '</tr>';

        document.getElementById("table-carrinho").innerHTML += conteudo;
    }
}

function limparCarrinho(){
    listaCarrinho = [];
    window.localStorage.clear();
    montarCardProdutos();
}

function removeItem(id){
    listaCarrinho.splice(id,1);
    window.localStorage.setItem("carrinho",JSON.stringify(listaCarrinho))
    montarCardProdutos();
}