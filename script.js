$(window).scroll(function() {
  var winHeight = $(window).height();
  var docHeight = $(document).height();
  var winScrolled = $(window).scrollTop();
  var docScrolled = $(document).scrollTop();
  var scrollPercent = 160 * winScrolled / (docHeight - winHeight);
  var main = $('#main').css('width', scrollPercent /1.1);
  $('#main').css('width', scrollPercent /1.1 + "%");
});

$(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
  });

// var target = $('.trio');
// var targetPos = target.offset().top;
// var winHeight = $(window).height();
// var scrollToElem = targetPos - winHeight;
// $(window).scroll(function(){
//   var winScrollTop = $(this).scrollTop();
//   if(winScrollTop > scrollToElem){
//     //сработает когда пользователь доскроллит к элементу с классом .elem
//     $('#body').css('background', red);
//   }
// });

$(document).ready(function() {
	var windowHeight = $(window).height();
 
	$(document).on('scroll', function() {
		$('.trio').each(function() {
			var self = $(this),
			height = self.offset().top + self.height();
			if ($(document).scrollTop() + windowHeight >= height) {
				self.addClass('green')
			}
		});
	});
});