$('.team .mc .container').slick({
    infinite:true,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots:true,
    nextArrow:false,
    prevArrow:false,
    responsive:[
        {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots:true
            }
          },
          {
            breakpoint: 567,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots:true
            }
          },
    ]
});

$('.promotion .box').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    nextArrow:'<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right-long"></i></button>',
    prevArrow:'<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left-long"></i></button>',
    responsive: [
        {   breakpoint:772,
            settings:{
            dots:false}
        }]
});
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