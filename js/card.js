$(document).ready(function () {

    // Define card element
    const card = '.card-group .card';

    // Get the size header (title + subtitle, including padding)
    // let titleCardSize = $(card + ' .card-title').outerHeight() + $(card + ' .card-subtitle').outerHeight();

    // First,  apply height of '.card-content' without the aditional information and 
    // the full height of 'img'. This second part is important for animations works correctly.
    // $(card + ' .card-content').attr('style', 'height: ' + (titleCardSize +) + 'px')

    // After that,  two things must happen for work when mouse is hover on div:
    //   1) In '.card-content', apply the full heigt of itself.
    //   2) Calc the size of 'img' - 'aditional information' and apply in img.



    // Apply title size as card height


    // Magic! 
    $(card).hover(function () {
        // $(card + ' .card-content').attr('style', 'height: inherit')
        //Apply the hover class for animations
        $(this).toggleClass('card-hover')
    })

    // Show cards height.
    // console.log(titleCardSize)

    // Duplicate cards
    var i
    for (i = 0; i < 2; i++) {
        $(".card-wrap").clone().appendTo(".card-group")
    }

    // Make clicable
    $(card).each(function () {
        $(this).click(function () {
            window.location = $(this).find('a').attr('href')
            return false
        })
    })

});