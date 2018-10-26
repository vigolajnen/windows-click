jQuery(function($){

// Настройки

	var dir = 'https://kupibalkon.online/calc2';	// Путь к папке скрипта

	// Отправка заявки
	var mailer_from    = 'admin@okna-sity.ru';	// От кого
	var mailer_to      = 'okna-sity.ru@yandex.ru';	// Кому
	var mailer_subject = 'Заявка с сайта okna-sity.ru'; // Тема письма

// Инициализация

	$('.type_balcon').click(function () {
		$('.type_balcon').css('color', '#000;');
		$(this).css('color', '#006fb8;');
	});

	$('.check_link a').click(function () {
		$(this).parent().parent().parent().find('a').removeClass('active');
		$(this).addClass('active');
	});

	$('.calc2__parametrs a').click(function(){
		re_show();
		return false;
	});

	$('input[name="typew"]').click(function(){
		re_show();
	});

	$('input[type="checkbox"]').click(function(){
		re_show();
	});

	// Отправка заявки
	$('.calc2 form').on('submit', function(event){
		event.preventDefault();

		var d  = 'from='+mailer_from;
			d += '&to='+mailer_to;
			d += '&subject='+mailer_subject;
			d += '&message=Имя: '+$(this).find('input[name="name"]').val();
			d += '<br>Телефон: '+$(this).find('input[name="phone"]').val();

		$('#type__defualt').prop('checked') ? d += '<br>Тип балкона: обычный'     : d += '<br>Тип балкона: французский';

		d += '<br>';
		$('.check_link').each(function(){
			var name  = $(this).parent().prev().find('h3').html(),
				value = $(this).find('.active').html();

			d += name+': '+value+'<br>';
		});

    	d += '<br>Дополнительные элементы:<br>';
		$('input[type="checkbox"]').each(function(){
			if($(this).is(':checked')){
				d += $(this).parent().text().trim()+'<br>';
			}
		});

		$.ajax({
			data: d,
			url: dir+'/php/mailer.php',
			type: 'POST',
			success: function(d) {
				$('.calc2_popup').show();
			}
		});
	});

	// Закрытие popup
	$('.calc2_popup .wind-close').on('click', function(event){
		$('.calc2_popup').hide();
	});
	$('.calc2_popup .wind-wrap').on('click', function(event){
		if($(event.target).hasClass('wind-wrap')) $('.calc2_popup').hide();
	});
	$('.calc2_popup .btn').on('click', function(event){
		$('.calc2_popup').hide();
	});

// Функции

	// Смена изображения
	function re_show(){
		var ceil_a = $('.ceil_a .active').parent().attr('data-type');

		if(ceil_a == 1){
			$('#ceil').attr('src', dir+'/images/beton.png');
		} else if(ceil_a == 2){
			$('#ceil').attr('src', dir+'/images/ondulin.png');
		} else if(ceil_a == 3){
			$('#ceil').attr('src', dir+'/images/profil.png');
		}

		var otdelka_pola = $('.otdelka_pola .active').parent().attr('data-type');

		if(otdelka_pola == 1){
			$('#type_pol').attr('src', dir+'/images/pol_doska.png');
			$('#type_pol').show();
			$('#p').show();
		} else if(otdelka_pola == 2){
			$('#type_pol').attr('src', dir+'/images/pol_laminat.png');
			$('#type_pol').show();
			$('#p').show();
		} else if(otdelka_pola == 3){
			$('#type_pol').attr('src', dir+'/images/pol_linolium.png');
			$('#type_pol').show();
			$('#p').show();
		} else if(otdelka_pola == 4){
			$('#type_pol').attr('src', dir+'/images/pol_kovrolin.png');
			$('#type_pol').show();
			$('#p').show();
		} else if(otdelka_pola == 0){
			$('#type_pol').hide();
			$('#p').hide();
		}

		if ($('#type__defualt').is(':checked')){
			$('#otliv').show();
			$('#small_podokon').show();

			$('#type_balcon').attr('src', dir+'/images/defualt.png');

			var otdelka = $('.otdelka_sten .active').parent().attr('data-type');
			if(otdelka == 1){
				$('#type_sten').attr('src', dir+'/images/vagonka.png');
				$('#type_sten1').attr('src', dir+'/images/vagonka1.png');

				$('#type_sten_dop').attr('src', dir+'/images/vagonka_fr.png');
				$('#type_sten_dop').show();

				$('#brusya').show();
				$('#type_sten').show();
			} else if(otdelka == 2){
				$('#type_sten').attr('src', dir+'/images/pvx.png');
				$('#type_sten1').attr('src', dir+'/images/pvx1.png');

				$('#type_sten_dop').attr('src', dir+'/images/pvx_potolok.png');
				$('#type_sten_dop').show();
				$('#brusya').show();

				$('#type_sten').show();
				$('#type_sten1').show();
			} else if(otdelka == 3){
				$('#type_sten').hide();
				$('#type_sten1').hide();
				$('#type_sten_dop').hide();
				$('#p').hide();
				$('#brusya').hide();
			}

			var sl_a =  $('.sl_a .active').parent().attr('data-type');
			if(sl_a == 1){
				$('#sl').attr('src', dir+'/images/slyding1.png');
				$('#sl').show();
			} else if(sl_a == 2){
				$('#sl').attr('src', dir+'/images/slyding2.png');
				$('#sl').show();
			} else if(sl_a == 0){
				$('#sl').attr('src', dir+'/images/slyding1.png');
				$('#sl').show();

			}

			$('#p').attr('src', dir+'/images/p.png');

			$('#dop1').prop('disabled',false);
		} else {
			$('#dop1').attr('disabled','disabled');
			$('#dop1').prop('checked',false);
			$('#otliv').hide();
			$('#small_podokon').hide();
			$('#type_balcon').attr('src', dir+'/images/defualt_fr.png');

			otdelka = $('.otdelka_sten .active').parent().attr('data-type');
			if(otdelka == 1){
				$('#type_sten').attr('src', dir+'/images/vagonka_fr.png');
				$('#type_sten1').attr('src', dir+'/images/vagonka1.png');

				$('#type_sten_dop').attr('src', dir+'/images/potolok_vagonka.png');
				$('#type_sten_dop').show();

				$('#brusya').show();

				$('#type_sten').show();
				$('#type_sten1').show();
			} else if(otdelka == 2){
				$('#type_sten').attr('src', dir+'/images/pvx_fr.png');
				$('#type_sten1').attr('src', dir+'/images/pvx1.png');


				$('#type_sten_dop').attr('src', dir+'/images/pvx_potolok.png');
				$('#type_sten_dop').show();

				$('#type_sten').show();
				$('#brusya').show();
				$('#type_sten1').show();
			} else if(otdelka == 3){
				$('#type_sten').hide();
				$('#type_sten1').hide();
				$('#p').hide();
				$('#type_sten_dop').hide();
				$('#brusya').hide();
			}

			$('#p').attr('src', dir+'/images/p2.png');
			$('#sl').hide();
		}

		$('#dop6').is(':checked') ? $('#d6').show() : $('#d6').hide();
		$('#dop5').is(':checked') ? $('#d5').show() : $('#d5').hide();
		$('#dop4').is(':checked') ? $('#d4').show() : $('#d4').hide();
		$('#dop1').is(':checked') ? $('#d1').show() : $('#d1').hide();
		$('#dop2').is(':checked') ? $('#d2').show() : $('#d2').hide();
	}

});