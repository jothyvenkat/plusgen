$('.mob_menu .dp').on('click',function(){
    if($(' .dropdown-content').hasClass('act')){
        $(' .dropdown-content').hide();
        $(' .dropdown-content').removeClass('act');
        $('.mob_menu .dp').removeClass('fa-xmark').addClass('fa-bars');
    }
    else{
        $('.dropdown-content').show();
        $('.dropdown-content').addClass('act');
        $('.mob_menu .dp').removeClass('fa-bars').addClass('fa-xmark');
    }
})
$('.mainback').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    prevArrow:false,
    nextArrow:false,
    autoplay:true,
    autoplaySpeed:2000
});
$('.clients .container').slick({
    slidesToShow:5,
    slidesToScroll:5,
    infinite:true,
    prevArrow:false,
    nextArrow:false,
    autoplay:true,
    dots:false,
    speed:3000,
    autoplaySpeed:1000,
    responsive:[
        {   breakpoint:1024,
            settings:{
                slidesToShow:3,
                slidesToScroll:3
            }
        },
        {   breakpoint:767,
            settings:{
                slidesToShow:2,
                slidesToScroll:2
            }
        },
    ]
});
$('.fields .container .content ul li').on('click',function(){
    $('.fields .container .content ul li').removeClass('active');
    $(this).addClass('active');
    let attrVal=$(this).attr('data-tab');
    $('.fields .container .tabcontent .desc').removeClass('active');
    $('.fields .container .tabcontent .desc'+'#'+attrVal).addClass('active');
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