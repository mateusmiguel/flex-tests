var cards = function () {
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

var resizeTimer;

$(window).on('resize', function(e) {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    cards()       
  }, 250);
});

window.onload = cards