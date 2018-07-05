var cards = function () {

    function cardCalc(el) {
        return 'rodei';
    }

    console.log(cardCalc());

    var titleLenght = []

    $('.card-group .card .card-title').each(function () {
        $(this).attr('style', 'height: ');
        titleLenght.push($(this).height())
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