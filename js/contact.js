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
$('.dropdown-content > ul >li').click('on',function(){
    $('.mob_menu .dp > ul >li').removeClass('active');
    $(this).addClass('active');
})