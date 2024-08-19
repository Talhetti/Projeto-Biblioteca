function mostrarConteudo(section) {
    let template = document.getElementById(section + 'Template').content;
    
    let areaConteudo = document.getElementById('areaConteudo');
    
    areaConteudo.innerHTML = '';
    areaConteudo.appendChild(document.importNode(template, true));
}

mostrarConteudo('home');

function removeDiv(){
    var div = document.getElementById("divLivros");
    div.remove();
}

function removeMostrar(section){
    removeDiv();
    mostrarConteudo(section);
}

function recarregarPag(){
    location.reload();
}