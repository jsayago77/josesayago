$(document).ready(function () {

    /* --------------------- TAG "a" CAMBIO DE CV / PORTAFOLIO -------------------- */
    $('a[href="#cv"').on('click', function () {
        $(this).addClass('active border border-bottom-0');
        $('a[href="#portfolio"').removeClass('active border border-bottom-0');
        $('#cv').removeClass('d-none');
        $('#portfolio').removeClass('d-block');
        $('#cv').addClass('d-block');
        $('#portfolio').addClass('d-none');
    });
    $('a[href="#portfolio"').on('click', function () {
        $(this).addClass('active border border-bottom-0');
        $('a[href="#cv"').removeClass('active border border-bottom-0');
        $('#portfolio').removeClass('d-none');
        $('#cv').removeClass('d-block');
        $('#portfolio').addClass('d-block');
        $('#cv').addClass('d-none');
    });
    /* --------------------- TAG "a" CAMBIO DE CV / PORTAFOLIO -------------------- */

    $('.show-element').on('click', function () {
        var card = $(this).closest('div.card');
        var context = $(this).parent().prev();

        if( context.hasClass('d-none') ){
            card.addClass('w-100');
            context.removeClass('d-none');
            context.addClass('d-block');

            $(this).html('Cerrar');
        } else {
            card.removeClass('w-100');
            context.removeClass('d-block');
            context.addClass('d-none');

            $(this).html('Ver');
        }
    });
});