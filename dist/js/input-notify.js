
(function($) {

	$.inputNotify = function(element, data, timeHide,  options) {
		var defaults = {
			color: '#fff',
			background: 'red',
			icon: 'error',
		}	

		var plugin = this;
		plugin.settings = {}

		var $element = $(element),
			 element = element;

		plugin.init = function() {
			
			plugin.settings = $.extend({}, defaults, options);
			var icon = '';
			switch(plugin.settings.icon) {
				case 'success':
					icon = '&#10003;'
					break;
				case 'error':
					icon = '&#9888;';
					break;
				case '':
					icon = '';
					break;
				default: icon = plugin.settings.icon	
			}
			if($element.find('span[class*="c-notify"]').length){
				$element.find('span[class*="c-notify"]').remove();
			}
			var html = `<span class="c-notify--error"
							style="color:${plugin.settings.color};background-color:${plugin.settings.background}"><i style="border-bottom-color:${plugin.settings.background}!important;"></i>${icon} ${data}</span>`;
			$element.addClass('u-position-relative').append(html);
			if (timeHide > 0) {
				setTimeout(function () {
					$element.find('span[class*="c-notify"]').remove()
				}, timeHide);
			}
		}	
		plugin.init();
	}
	$.fn.inputNotify = function(data, timeHide, options) {
		return this.each(function() {
			var plugin = new $.inputNotify(this, data, timeHide, options);
			$(this).data('inputNotify', plugin);
			
		});

	}

})(jQuery);