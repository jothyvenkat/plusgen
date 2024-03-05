$('.popular .pop_tabs >ul>li').on("click",function(){
    $('.popular .pop_tabs >ul>li').removeClass('active_tab');
    $(this).addClass('active_tab');
    let attrVal=$(this).attr('data-tab');
    $('.popular .list').removeClass('actv');
    $('.popular .list'+'#'+attrVal).addClass('actv');
})
$('.trending .trend_tabs li').on("click",function(){
    $('.trending .trend_tabs li').removeClass('active_tab');
    $(this).addClass('active_tab');
    let attrVal=$(this).attr('data-tab');
    $('.trending .tr_content .list').removeClass('actv');
    $('.trending .tr_content .list'+'#'+attrVal).addClass('actv');
})
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
$(' .dropdown-content > ul >li').click('on',function(){
    $('.dropdown-content > ul >li').removeClass('active');
    $(this).addClass('active');
})
$('.popular .list a').on('click',function(){
    if($('.popular .list .loading_things').hasClass('cl')){
        $('.popular .list .loading_things').removeClass('cl');
        $('.popular .list .load1').hide();
        $('.popular .list .load').show();
    }
    else{
        $('.popular .list .loading_things').addClass('cl');
        $('.popular .list .load').hide();
        $('.popular .list .load1').show();
    }
})
//For slick slider 
$(' .trending .container').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    infinite: true,
    nextArrow:'<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right-long"></i></button>',
    prevArrow:'<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left-long"></i></button>',
    responsive: [
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
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots:false
            }
          },
          {
            breakpoint: 610,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots:false
            }
          }
        
      ]
  });
  $('.new .pop_tabs >ul>li').on("click",function(){
    $('.new .pop_tabs >ul>li').removeClass('active_tab');
    $(this).addClass('active_tab');
    let attrVal=$(this).attr('data-tab');
    $('.new .list').removeClass('actv');
    $('.new .list'+'#'+attrVal).addClass('actv');
})
$('.new .list a').on('click',function(){
    if($('.new .list .loading_things').hasClass('cl')){
        $('.new .list .loading_things').removeClass('cl');
        $('.new .list .load1').hide();
        $('.new .list .load').show();
    }
    else{
        $('.new .list .loading_things').addClass('cl');
        $('.new .list .load').hide();
        $('.new .list .load1').show();
    }
})
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