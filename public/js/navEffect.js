$(window).on('scroll',function(){
  if($(window).scrollTop()){
    $('.navbar').addClass('updated');
    $('.logo').addClass('logoUp');
    $('.uls').addClass('ulUp');
    $('.elec').addClass('elecUp');
  }else {
    $('.navbar').removeClass('updated');
    $('.logo').removeClass('logoUp');
    $('.uls').removeClass('ulUp');
    $('.elec').removeClass('elecUp');
  }
});
