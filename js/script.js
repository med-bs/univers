$(document).ready(function(){
    //menutoggle
    $('#menuToggle').click(function(){
        $('nav').stop(true, true).slideToggle();
    });
    //bouton txtsize
    $('#txtSize button:not(.active)').click(changeTxtSize);
});
//fonction qui gere le changement du font du text
function changeTxtSize(evt){
    let clicked = $(evt.target);
    let newSize = clicked.data('size');
    $('#pageContent').animate({'fontSize': `${newSize}rem`}, function(){
        $('#txtSize button.active').removeClass('active').click(changeTxtSize);
        clicked.addClass('active').off('click');
    });
}