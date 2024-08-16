const livros = require('./listaLivros');
const troca = require('./troca')

function insertionSort (lista){
    for(let atual = 0; atual < lista.lenght; atual++){
        let analise = atual;
        while(analise > 0 && lista[analise] < lista[analise - 1].preco){
            troca(lista,analise)
            analise--
        }
    }
    console.log(lista);
}
insertionSort(livros);