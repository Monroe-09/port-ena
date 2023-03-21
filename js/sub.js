$(document).ready(function(){
  //상단이동
  $('#sc_t').click(function(){
    $('html').animate({
      scrollTop:0
    },'slow');
  })

  $('header .center #h_menu>li, .sub, #bg').mouseenter(function(){
    $('header .sub').stop().slideDown();
    $('#bg').stop().slideDown();
  }).mouseleave(function(){
    $('header .sub').stop().slideUp();
    $('#bg').stop().slideUp();
  });
  
  $('#trigger').click(function(){
    $(this).toggleClass('active')
    $('.modal_h').fadeToggle()
    $('body').toggleClass('active')
  });

})