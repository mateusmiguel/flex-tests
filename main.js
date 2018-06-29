var cards = function () {
    // Cria o array vazio
    var textLenght = []

    //Verifica a altura dos títulos de cada bloco e os armazena em uma array.
    $('.card-group .card .card-title').each(function (index, value) {
        textLenght.push($(this).height());
        textLenght.sort()
    })

    var titleHeight = textLenght.pop()

    $('.card-group .card .card-title').each(function (index, value) {
        $(this).attr('style', 'height: ' + titleHeight + 'px;')
    })
}

cards()

// Chama a função novamente a cada resize da página.
window.onresize = cards;