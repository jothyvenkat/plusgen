$('.mob_menu .dp').on('click',function(){
    if($(' .dropdown-content').hasClass('act')){
        $('.dropdown-content').hide();
        $('.dropdown-content').removeClass('act');
        $('.mob_menu .dp').removeClass('fa-xmark').addClass('fa-bars');
    }
    else{
        $('.dropdown-content').show();
        $('.dropdown-content').addClass('act');
        $('.mob_menu .dp').removeClass('fa-bars').addClass('fa-xmark');
    }
})
$('.dropdown-content > ul >li').on('click',function(){
    $('.mob_menu .dp > ul >li').removeClass('active');
    $(this).addClass('active');
})
$('.partners .load a').on('click',function(){
    if($('.partners .loading').hasClass('cl')){
        $('.partners .loading').removeClass('cl');
        $('.partners .load .l2').hide();
        $('.partners .load .l1').show();
    }
    else{
        $('.partners .loading').addClass('cl');
        $('.partners .load .l1').hide();
        $('.partners .load .l2').show();}
    
})

