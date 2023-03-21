$(document).ready(function(){

  //상단이동
  $('#sc_t').click(function(){
    $('html').animate({
      scrollTop:0
    },'slow');
  })


  //모달
  var w=$(document).width();
  var h=$(document).height();
  $('#modal').css({
    'width':w,
    'height':h
  });
  $('#recent .center>div').click(function(){
    var i=$(this).index()-1;
    var video=$('#media>div').eq(i).find('video');
    video.get(0).currentTime = 0;
    if(i>2){
      $('#modal').hide();
      $('#media>div').hide();
    }else{
      $('#modal').fadeIn();
      $('#media>div').eq(i).fadeIn();
    }
  });
  $('#modal a').click(function(){
    $('#modal').fadeOut();
    $('#media>div').fadeOut();
    return false;
  });
  
  $('#modal a').click(function(){
    $('#modal').fadeOut();
    $('#media>div').fadeOut();
    return false;
  });

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
  
  //배너 1280*640 88*640 24
  $("main div").first().animate({width:"1280px"}).addClass("a");
  let i=0;
  function change(){  
    ++i;
    $($("main div")[i-1]).animate({width:"5%"},0.01).removeClass("a");
    $($('.slide li')[i-1]).removeClass("b");
    if(i==5){
      i=0;
    }
    $($("main div")[i]).animate({width:"1280px"}).addClass("a");
    $($('.slide li')[i]).addClass("b");
  }
  var a=setInterval(change,5000);
  let j=0;    
  $('main div').click(function(){
    clearInterval(a);
    j=$(this).index();
    if(j!=0 || j!=4){
      $('span').removeClass('c');
    }
    if($(this).hasClass("a")){}
    else{
      $('main div').animate({width:"5%"},0.5).removeClass('a');
      $('.slide li').removeClass('b');
      $(this).animate({width:"1280px"},200).addClass('a');
      $( $('.slide li')[$(this).index()] ).addClass('b');
    }  
  });
  //반응형 쿼리


});