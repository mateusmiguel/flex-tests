var cards = function () {
    var titleLenght = []

    $('.card-group .card .card-title').each(function () {
        $(this).attr('style', 'height: ');
        titleLenght.push($(this).outerHeight(true))
        titleLenght.sort()
    })

    var titleHeight = titleLenght.pop()

    $('.card-group .card .card-title').each(function () {
        $(this).attr('style', 'height: ' + titleHeight + 'px')
    })

    subtitleLenght = []

    $('.card-group .card .card-sub').each(function () {
        $(this).attr('style', 'height: ');
        subtitleLenght.push($(this).outerHeight(true))
        subtitleLenght.sort()
    })

    var subtitleHeight = subtitleLenght.pop()

    $('.card-group .card .card-sub').each(function () {
        $(this).attr('style', 'height: ' + subtitleHeight + 'px')
    })

    console.log('rodou')
}

window.onload = cards
window.onresize = cards