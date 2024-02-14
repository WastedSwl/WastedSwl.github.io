(function($){
  // variables
  elementWidth = $('ul').width(),
  containerWidth = $('nav').width(),
  difference = elementWidth-containerWidth,
  finalWidth = difference * 1.5,
  element = $('ul');
  
  // active on click
  $('li').on('click', function(){
    $('li').removeClass('active');
    $(this).addClass('active');
  });
  
})(jQuery);

$(document).ready(function() {
  var navbar = $('nav'); // Селектор для вашей навигационной панели
  var navbarHeight = navbar.outerHeight(); // Высота навигационной панели

  $(window).scroll(function() {
    if ($(this).scrollTop() > navbarHeight) {
      navbar.addClass('sticky');
    } else {
      navbar.removeClass('sticky');
    }
  });
});