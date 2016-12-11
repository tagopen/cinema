$(document).ready(function() {
	var urlPath = $('.bnt_emp_text').attr('data-location');
	console.log(urlPath);

	//$('.drop_menu__i').removeClass('drop_menu__i').addClass('drop_menu__e');
	/*$('.drop_menu__e').on('click', function(){
			 var locationCookie = $(this).attr('data-target');
			 $.cookie('cityLocation', locationCookie, { path: '/' });
			 location.reload();
	});*/

	$(document).off('click, mouseup, mouseover').on('click', '.btn_rasp_static', function() {
		ticketManager.session("a1c097b8-f8a4-4694-9200-a85b7c33a3d7",$(this).attr('data-session'));
	})
	$(document).on('mouseup', '.ui-state-default', function(e) {
		e.preventDefault();
	})
	$(document).on('click', '.date_link', function(e) {
			e.preventDefault();
			window.stop();
				$('.date_item').removeClass('active');
				$(this).parent().addClass('active');
				$('.rasp_items').addClass('rasp_hover').load('' + $(this).attr('href') + ' .rasp_items', function() {
				$('.rasp_items').removeClass('rasp_hover');
				$('.rasp_filter.cf.s-schedule-filter').remove();
				$('.btn_rasp').removeClass('btn_rasp').addClass('btn_rasp_static');
			});
	})

	if (urlPath) {urlPath = '/'+urlPath}
	else {urlPath = '/msk'}


	$('.sh_block').load('https://kassa.rambler.ru' + urlPath +  '/movie/62395?noredirect=1 #schedule', function() {
		//$('.rasp_item').hide();
		//$('.rasp_time[data-format="3"]').show().closest('.rasp_item').show();
		$('.rasp_filter.cf.s-schedule-filter').remove();
		$('.btn_rasp').removeClass('btn_rasp').addClass('btn_rasp_static');
	});
})