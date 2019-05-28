var carouselControlPositionY = ($(document).height()/2) - ($('.carousel-control-btn').height()/2);
$('.carousel-control-btn').css({'position':'fixed', 'top':carouselControlPositionY});

for(i = 0; i < $('.carousel-item').length; i++) {
  var roundImgPositionY = ($(document).height()/2) - ($('#slide'+i).height()/2);
  $('#slide'+i).css({'position':'fixed', 'top':roundImgPositionY});
}

$(".carousel-control-next-icon").click(function (){
  var slideAtual = $('div.active').index() + 2;
  $('.progress-bar').css('width', ((slideAtual*100)/($('.carousel-item').length)) + "%");
  $('.carousel-control-prev-icon').show();
  if(slideAtual >= $('.carousel-item').length) {
    $('.carousel-control-next-icon').hide();
  }
});

$('.carousel-control-prev-icon').click(function (){
  var slideAtual = $('div.active').index() - 1;
  $('.progress-bar').css('width', ((slideAtual*100)/($('.carousel-item').length)) + "%");

  if(slideAtual == 0)
    $('.carousel-control-prev-icon').hide();
  else {
    $('.carousel-control-next-icon').show();
  }
});
