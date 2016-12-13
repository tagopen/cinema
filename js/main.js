// Menu anchor scroll
$(document).ready(function(){
  $(".links").on("click",".links__item a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top -$('.navbar').outerHeight()+20}, 1500);
  });
});
$(document).ready(function() { 
  $("a.fancyimage").fancybox(); 
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
// Equal Height function
$.fn.equialHeight = function() {
  var $tallestcolumn = 0;
  var $currentHeight = 0;
  $.each($(this), function (index, value) {
    $currentHeight = $(this).height();
    if($currentHeight > $tallestcolumn)
    {
      $tallestcolumn = $currentHeight;
    }
  });
  $(this).height($tallestcolumn);
  return $(this);
} 

$(window).on('resize', function(){
  if( $( window ).width() >= 768 ) {
    $('.soon__box').equialHeight();
    $('.soon__box img').equialHeight();
    $('.soon__naming').equialHeight();
    $('.footer__heading').equialHeight();
  }
  $('.sidebar').css({
    'min-height': $('.content').height()
  });
}).trigger('resize');
 

$('.gallery__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  centerPadding: '10',
  centerMode: true,
  focusOnSelect: true,
  prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="ic ic-sliderleft"></button>',
  nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="ic ic-sliderright"></button>'
});

(function () {
  var redirectUrl = "";

  if (!redirectUrl) return;

  var maxMobileSize = 668;
  var mqMobileResolution = '(-webkit-min-device-pixel-ratio: 3), (-moz-device-pixel-ratio: 3), (min-resolution: 3dppx)';
  var matchMedia = window && (window.matchMedia || window.msMatchMedia);
  var isMobileSize = screen.width < maxMobileSize && screen.height < maxMobileSize;
  var isMobileResolution = matchMedia ? matchMedia(mqMobileResolution).matches : false;
  var withNoRedirectCookie = new RegExp("(?:^|; )" + "NoRedirectMobileVersion".replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)").test(document.cookie);

  if (withNoRedirectCookie) return;

  if (isMobileSize || isMobileResolution) {
    location.href = redirectUrl;
  }
})();

var _prum = [['id', '533ab5afabe53d6d0e076c7a'],
['mark', 'firstbyte', (new Date()).getTime()]];
(function () {
  var s = document.getElementsByTagName('script')[0],
      p = document.createElement('script');
  p.async = 'async';
  p.src = 'https://rum-static.pingdom.net/prum.min.js';
  s.parentNode.insertBefore(p, s);
})();

//Kassa Google Tag Manager
var cookieDomain = 'https://kassa.rambler.ru'.replace(/^(https?):\/\//, '.');
function loadFunc() {

  function googleTagManager() {
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({
        'gtm.start':
          new Date().getTime(),
        event: 'gtm.js'
      });
      var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != 'dataLayer' ? '&l=' + l : '';
          j.async = true;
          j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-PZPFJQ');
  }

  (function checkCookie() {
    var deleteCookie = function(name) {
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    };
    var cookieString = document.cookie;
    if (cookieString.indexOf('kuid') == -1) {
      var request = new XMLHttpRequest();
      request.open('POST', 'https://' + window.location.hostname + '/kassauserid', true);
      request.setRequestHeader('Content-Type', 'application/json');
      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          var response = JSON.parse(request.responseText);
          if (response.KassaUserId) {
            var expiresDate = new Date();
            expiresDate.setDate(expiresDate.getDate() + 1);
            document.cookie = 'kuid=' + response.KassaUserId +';domain=' +cookieDomain + ';path=/;expires=' + expiresDate.toUTCString();
          } else {
            deleteCookie('kuid');
          }
        }
        googleTagManager();
      };
      request.onerror = function() {
        googleTagManager();
      };
      request.send();
    } else {
      googleTagManager();
    }
  })();
}

(function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
})(loadFunc);
//End Kassa Google Tag Manager
