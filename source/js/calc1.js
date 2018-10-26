 jQuery(function($){

// Настройки

	var dir = 'https://kupibalkon.online/calc1';	// Путь к папке скрипта

	// Отправка заявки
	var mailer_from    = 'admin@okna-sity.ru';	// От кого
	var mailer_to      = 'okna-sity.ru@yandex.ru';	// Кому
	var mailer_subject = 'Заявка с сайта okna-sity.ru'; // Тема письма

	// Ширина и высота
	var min_width  = 1500; // Минимальная ширина
	var max_width  = 8000; // Максимальная ширина
	var min_height = 1000; // Минимальная высота
	var max_height = 1800; // Максимальная высота

	// Коэффициенты конструкций балкона
	price_multipler_loggia_h   = 1;		// Лоджия, холодное остекление
	price_multipler_loggia_t   = 1.22	// Лоджия, теплое остекление
	price_multipler_ugol_h     = 1.33;	// Угловой, холодное остекление
	price_multipler_ugol_t     = 1.45;	// Угловой, теплое остекление
	price_multipler_p_loggia_h = 1.22;	// П-образный, холодное остекление
	price_multipler_p_loggia_t = 1.5;	// П-образный, теплое остекление
	price_multipler_kabluk_h   = 1.39;	// Каблук, холодное остекление
	price_multipler_kabluk_t   = 1.61;	// Каблук, теплое остекление

	// Цена для коэфициента 1
	start_price = 18000;

// Инициализация

	var params = {};

	params.x = 3000;	// Ширина по умолчанию
	params.y = 1400;	// Высота по умолчанию

	// Ползунки
	$( ".calc1-vertical-slider-ui" ).slider({
		min: min_height,
		max: max_height,
		step: 10,
		orientation: "vertical",
		slide: slider_change,
		change: slider_change,
	});
	$( ".calc1-horisontal-slider-ui" ).slider({
		min: min_width,
		max: max_width,
		step: 10,
		slide: slider_change,
		change: slider_change,
	});
	$( ".calc1-vertical-slider-ui" ).slider({value: params.y});
	$( ".calc1-horisontal-slider-ui" ).slider({value: params.x});

	var btype;

	change_balkon_type();

	$('.calc1-type-selector-one').on('click',function(){
		 $('.calc1-type-selector-one-selected').find('img').attr('src', dir+'/images/'+$('.calc1-type-selector-one-selected').data('btype')+'-icon.png');
		 $('.calc1-type-selector-one-selected').removeClass('calc1-type-selector-one-selected');
		 $(this).addClass('calc1-type-selector-one-selected');
		 $(this).find('img').attr('src', dir+'/images/'+$(this).data('btype')+'-icon-active.png');

		 change_balkon_type();
	});

	$('.calc1-type2-selector input').on('change',function(){
		change_balkon_type();
	});

	$('.calc1-options input').on('change',function(){
		change_balkon_type();
	});

	// Кнопка "Заказать"
	$('.calc1-button').on('click',function(){
		$('.calc1_popup').show();
	});

	// Отправка заявки
	$('.calc1_popup form').on('submit', function(event){
		event.preventDefault();

		var d  = 'from='+mailer_from;
			d += '&to='+mailer_to;
			d += '&subject='+mailer_subject;
			d += '&message=Имя: '+$(this).find('input[name="name"]').val();
			d += '<br>Телефон: '+$(this).find('input[name="phone"]').val();
			d += '<br><br>Конструкция балкона: '+$('.calc1-type-selector-one-selected img').attr('data-value');
			d += '<br>Тип остекления: '+$('.calc1 input[name="calc1-type2-selector"]:checked').val();
			d += '<br>Ширина: '+$('.calc1-horisontal-slider-ui').slider("option", 'value');
			d += '<br>Высота: '+$('.calc1-vertical-slider-ui').slider("option", 'value');

		$('.calc1 input[name="calc1-options-1"]').prop('checked') ? d += '<br>Монтаж: да'     : d += '<br>Монтаж: нет';
		$('.calc1 input[name="calc1-options-2"]').prop('checked') ? d += '<br>Подоконник: да' : d += '<br>Подоконник: нет';
		$('.calc1 input[name="calc1-options-3"]').prop('checked') ? d += '<br>Отлив: да'      : d += '<br>Отлив: нет';
		$('.calc1 input[name="calc1-options-4"]').prop('checked') ? d += '<br>Козырек: да'    : d += '<br>Козырек: нет';

		$.ajax({
			data: d,
			url: dir+'/php/mailer.php',
			type: 'POST',
			success: function(d) {
				$('.calc1_popup_form').hide();
				$('.calc1_popup_success').show();
			}
		});
	});

	// Закрытие popup
	$('.calc1_popup .wind-close').on('click', function(event){
		$('.calc1_popup').hide();
	});
	$('.calc1_popup .wind-wrap').on('click', function(event){
		if($(event.target).hasClass('wind-wrap')) $('.calc1_popup').hide();
	});

// Функции

	// Выбор параметров балкона
	function slider_change(event, ui){
	   if($(event.target).hasClass('calc1-vertical-slider-ui')){
			$(".calc1-vertical-slider-counter").text(ui.value);
			$(".calc1-vertical-slider-counter").css('top', 100-(ui.value-$('.calc1-vertical-slider-ui').slider("option", 'min'))/($('.calc1-vertical-slider-ui').slider("option", 'max')-$('.calc1-vertical-slider-ui').slider("option", 'min'))*100+'%');
		}

	   if($(event.target).hasClass('calc1-horisontal-slider-ui')){
		$(".calc1-horisontal-slider-counter").text(ui.value);
		 $(".calc1-horisontal-slider-counter").css('left', (ui.value-$('.calc1-horisontal-slider-ui').slider("option", 'min'))/($('.calc1-horisontal-slider-ui').slider("option", 'max')-$('.calc1-horisontal-slider-ui').slider("option", 'min'))*100+'%');
		}

		calculate_balkon_price();
	}
	function change_balkon_type(){
		btype = $('.calc1-type-selector-one-selected').data('btype');

		if($('#calc1-type2-selector-1').is(':checked')) btype2 = '-h';
		if($('#calc1-type2-selector-2').is(':checked')) btype2 = '-t';

		btype = btype+btype2;
		$('.calc1-constuction img').attr('src', dir+'/images/'+btype+'.jpg');

		calculate_balkon_price();
	}

	// Расчет
	function calculate_balkon_price(){
		var price_multipler;
		switch(btype){
			case 'loggia-h':
				price_multipler = price_multipler_loggia_h;
				break;

			case 'loggia-t':
				price_multipler = price_multipler_loggia_t;
				break;

			case 'ugol-h':
				price_multipler = price_multipler_ugol_h;
				break;

			case 'ugol-t':
				price_multipler = price_multipler_ugol_t;
				break;

			case 'p-loggia-h':
				price_multipler = price_multipler_p_loggia_h;
				break;

			case 'p-loggia-t':
				price_multipler = price_multipler_p_loggia_t;
				break;

			case 'kabluk-h':
				price_multipler = price_multipler_kabluk_h;
				break;

			case 'kabluk-t':
				price_multipler = price_multipler_kabluk_t;
				break;
		}

		var size_multipler = $('.calc1-vertical-slider-ui').slider("option", 'value')*$('.calc1-horisontal-slider-ui').slider("option", 'value')/(3000*1400);

		options_sum = 0;

		if($('#calc1-options-1').is(':checked')) options_sum += $('.calc1-vertical-slider-ui').slider("option", 'value')*$('.calc1-horisontal-slider-ui').slider('option', 'value')/1000/1000*700;
		if($('#calc1-options-2').is(':checked')) options_sum += $('.calc1-horisontal-slider-ui').slider("option", 'value')/1000*250;
		if($('#calc1-options-3').is(':checked')) options_sum += $('.calc1-horisontal-slider-ui').slider("option", 'value')/1000*100;
		if($('#calc1-options-4').is(':checked')) options_sum += $('.calc1-horisontal-slider-ui').slider("option", 'value')/1000*200;

		price = Math.round(start_price*price_multipler*size_multipler+options_sum);

		$('.calc1-price-value').text(String(price).replace(/(.)(?=(\d{3})+$)/g,'$1 '));
	}

});
