function cards() {
    // Invert title and img order
    if ($(window).width() > 560) {
        $('.card-group .card').each(function () {
            $(this).find(".card-title").insertBefore($(this).find(".card-sub"))
        })
    } else {
        $('.card-group .card').each(function () {
            $(this).find(".card-title").insertBefore($(this).find(".card-img"))
        })
    }

    //Recalc card sizes
    function cardCalc(el) {

        var lenght = []

        $(el).each(function () {
            $(this).attr('style', 'height: ')
            lenght.push($(this).height())
            lenght.sort()
        })

        var height = lenght.pop()

        $(el).each(function () {
            $(this).attr('style', 'height: ' + height + 'px')
        })
    }

    cardCalc('.card-group .card .card-title')
    cardCalc('.card-group .card .card-sub')
}

window.onload = cards;

var resizeCard;
$(window).resize(function () {
    clearTimeout(resizeCard);
    resizeCard = setTimeout(function () {
        cards()
        console.log($(window).width())
    }, 250)
})
