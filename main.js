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

function removeMostrarTentar(section) {
    try {
        removeMostrar(section);
    } catch (error) {
        recarregarPag();
    }
}

function search_books() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('books');

    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}