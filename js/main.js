// Menu anchor scroll
$(document).ready(function(){
    $(".navbar").on("click",".nav__point a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top -$('.navbar').outerHeight()+180}, 1500);
    });
});
// Header numbers click
$(document).ready(function(){
  $('.phone__group').click( function () {
    $('.phone__link .fa').toggleClass('phone__icon--hidden');
    $('.phone__slide').toggleClass('phone__slide--visibility');
  });
});  
// Old browser notification
$(function() { 
  $.reject({
    reject: {
      msie: 9
    },
    imagePath: 'img/icons/jReject/',
    display: [ 'chrome','firefox','safari','opera' ],
    closeCookie: true,
    cookieSettings: {
      expires: 60*60*24*365
    },
    header: 'Ваш браузер устарел!',
    paragraph1: 'Вы пользуетесь устаревшим браузером, который не поддерживает современные веб-стандарты и представляет угрозу вашей безопасности.',
    paragraph2: 'Пожалуйста, установите современный браузер:',
    closeMessage: 'Закрывая это уведомление вы соглашаетесь с тем, что сайт в вашем браузере может отображаться некорректно.',
    closeLink: 'Закрыть это уведомление',
  });
});

$('.project__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.project__slider--small'
});
$('.project__slider--small').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.project__slider',
  dots: false,
  arrows: true,
  centerPadding: '10',
  centerMode: true,
  focusOnSelect: true,
  prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
  nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="fa fa-angle-right" aria-hidden="true"></i></button>'
});

// Slick-slider to certificates
var $carousel = $('.catalog__slider');
    if ( $(window).width()  >= 768) { 
        if($carousel.hasClass('slick-initialized')) {
            $carousel.unslick();
        }
    } else {
        if(!$carousel.hasClass('slick-initialized')) {
            $carousel.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: false,
                centerMode: false,
                initialSlide: 0,
                focusOnSelect: true,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="fa fa-angle-right" aria-hidden="true"></i></button>'
            });
        }
    }

// Scheme info animation
  if( $( window ).width() >= 768 ) {
    $(document).ready ( function() {
      $('.scheme__icon, .scheme__info').hover( function() {
        $(this).parent().toggleClass('scheme__btn--active');
      });
    });;
  }



// Equal Height function
function setEqualHeight(columns)
{
	var tallestcolumn = 0;
	columns.each(
		function()
		{
			currentHeight = $(this).height();
			if(currentHeight > tallestcolumn)
			{
				tallestcolumn = currentHeight;
			}
		}
		);
	columns.height(tallestcolumn);
}
// Set equal height
$(window).on('resize', function(){
  // For all screen
  //setEqualHeight($(".work-item"));

  // Only 767px-
  if( $( window ).width() >= 768 ) {
    setEqualHeight($('.create__name'));
    setEqualHeight($('.create__box'));
    setEqualHeight($('.process__box'));
    setEqualHeight($('.catalog__name'));
  }

  // Catalog button
  if( $( window ).width() >= 768 ) {
    $(document).ready( function () {
      $('.catalog__hidden').hide();
      $(document).on("click", ".catalog__click", (function(e) {
        e.preventDefault();
        $('.catalog__hidden').show();
        $('.catalog__click').hide();
      }));
    });
  }

  if( $( window ).width() < 768 ) {
      $('.catalog__click').remove();
  }



}).trigger('resize');


$(document).ready(function() { 
  $("a.fancyimage").fancybox(); 
}); 