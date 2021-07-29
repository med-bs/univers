$(document).ready(function(){
    let param=new URLSearchParams(window.location.search);
    if(param.has('id')){
        $.getJSON('js/img.json',function(data){
            let galerie=data[param.get('id')];
            $('#afficheImg h1').text(galerie.titre);
            let ulImg=$('#afficheImg ul');
            $.each(galerie.images,function(index,image){
                $(`<li><img src="images/${image}" class='image' /></li>`).click(afficheImg).appendTo(ulImg);
            });
        });
    }else{
        window.location.pathname('galeries.html');
    }
});
function afficheImg(evt){
    $('#galleryContainer').click(fermerImg).addClass('visible').children('img').attr('src',evt.target.src);
}
function fermerImg(){
    $('#galleryContainer').removeClass('visible');
}