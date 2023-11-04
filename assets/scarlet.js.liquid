(function() {
	var vendors = ['webkit', 'moz', 'ms', 'o'], vp = null;
	for (var x = 0; x < vendors.length && !window.requestAnimationFrame && !window.cancelAnimationFrame; x++)
	{
		vp = vendors[x];
		window.requestAnimationFrame = window.requestAnimationFrame || window[vp + 'RequestAnimationFrame'];
		window.cancelAnimationFrame = window.cancelAnimationFrame || window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame'];
	}
	if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) //iOS6 is buggy.
	{
		var lastTime = 0;
		window.requestAnimationFrame = function(callback, element)
		{
			var now = window.performance.now();
			var nextTime = Math.max(lastTime + 16, now); //First time will execute it immediately but barely noticeable and performance is gained.
			return setTimeout(function() { callback(lastTime = nextTime); }, nextTime - now);
		};
		window.cancelAnimationFrame = clearTimeout;
	}
}());

(function($){
	$.fn.scarletMarquee = function(method){
		function init($el){
			clearResizeTO($el);
			clearLoop($el);

			$el
				.css({
					'height': ''
				});

			var $scroll = $el.find('.scarlet-marquee-scroll');
			var $item = $el.find('.scarlet-marquee-item:eq(0)');
			var $itemSpan = $item.find('span');

			var outerWidth = $el.outerWidth();
			var singleWidth = Math.ceil($itemSpan.outerWidth());
			var singleHeight = Math.ceil($itemSpan.outerHeight());

			var windowPercent = singleWidth / outerWidth;
			var perWindow = Math.max(1, Math.ceil(1 / windowPercent)) * 3;

			for(var i = 0; i < perWindow - 1; i++){
				$scroll.append($item.clone());
			}

			$scroll
				.css({
					'width': singleWidth * perWindow
				});

			$el
				.css({
					'height': singleHeight
				})
				.data('resizeTO', null)
				.data('loopID', null)
				.data('x', 0)
				.data('dimensions', {
					perWindow: perWindow,
					outerWidth: outerWidth,
					singleWidth: singleWidth
				});

			loopTick($el);
		};

		function loopTick($el){
			var loopID = requestAnimationFrame(function(){
				loopUpdate($el);
			});
			$el.data('loopID', loopID);
		};

		function loopUpdate($el){
			var dimensions = $el.data('dimensions');
			var _x = $el.data('x');

			if(!dimensions){ return; }

			var $scroll = $el.find('.scarlet-marquee-scroll');
			
			var midI = Math.floor(dimensions.perWindow / 2);
			var xFrom = Math.floor(((midI * dimensions.singleWidth) * - 1) + (dimensions.outerWidth * 0.5) - (dimensions.singleWidth * 0.5));
			var xTo = xFrom - dimensions.singleWidth;
			var xPer = Math.round(dimensions.outerWidth / 2000);
			var xShift = _x + xPer;

			var x = xFrom - xShift;
			if(x < xTo){
				x = xFrom;
				xShift = 0;
			}

			$.Velocity.hook($scroll, 'translateX', x + 'px');
			$el.data('x', xShift);

			loopTick($el);
		};

		function reinit($el){
			$el.find('.scarlet-marquee-item').each(function(i){
				if(i > 0){
					$(this).remove();
				}
			});

			init($el);
		};

		function resize($el){
			clearResizeTO($el);

			var resizeTO = setTimeout(function(){
				reinit($el);
			}, 60);

			$el.data('resizeTO', resizeTO);
		};

		function clearResizeTO($el){
			var resizeTO = $el.data('resizeTO');
			if(resizeTO){
				clearTimeout(resizeTO);
			}
		}

		function clearLoop($el){
			var loopID = $el.data('loopID');
			if(loopID){
				cancelAnimationFrame(loopID);
			}
		}

		var methods = {
			init: function(){
				return this.each(function(){
					var $el = $(this);

					$(window).on('resize', function(){
						resize($el);
					});
					
					init($el);
				});
			},
			resize: function(){
				return this.each(function(){
					var $el = $(this);
					resize($el);
				});
			}
		};

		if(methods[method]){
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
        	return $.error('Method ' + method + ' does not exist on jQuery.scarletMarquee');
        }
	};

}(jQuery));

$(document).ready(function(){
	$('.scarlet-marquee').scarletMarquee();

	$('.site-header-right-menu').on('click', function(){
		$('.site-header-right').toggleClass('site-header-right--navActive');	
	})

	WebFont.load({
		custom: {
			families: ['scarlet_talk']
		},
		active: function(){
			$('.scarlet-marquee').scarletMarquee('resize');
		}
	});
  
  	
  
  	
});


  
  $(document).ready(function(){
  	$("#trigger__app-form").on("click", function(){
  		var selected_variant = "";
      
      	$(this).closest(".binding__easy-donation").find(".custom_input").each(function(){
          	if($(this).prop("checked")){
            	selected_variant = $(this).val();
          	}
      	});
      
      	if(selected_variant != "" && $(".easy__donation-app__trigger select#donation_amount").length > 0){
          
          	$(".easy__donation-app__trigger select#donation_amount").val(selected_variant);
          	$(".easy__donation-app__trigger .donation_button").trigger("click");
          
      	}
      
      	return false;
  	});
  
    var check_inprogress = "",
        total_try = 0;
    
  	function check__easy_app_loaded(){
    	var checkElement = $(document).find("#donation_amount").length;
      	
      	if(checkElement){
          	var inner_html = "";
          	$(document).find("#donation_amount option").each(function(){
          		inner_html += '<div class="custom__input"><input type="radio" class="custom_input" name="custom__input" value="'+$(this).val()+'" id="input_'+$(this).val()+'"><label class="" for="input_'+$(this).val()+'"> $'+$(this).html()+'</label></div>';
            });
        	
          	$(".custom__input-wrapper").html(inner_html);
          
          	$(".custom-donation-btn").addClass("custom__form-enable");
        }else{
          	if(total_try < 20){
        		setTimeout(check__easy_app_loaded, 2000);
            }else{
            	console.log("Process Terminate!");  
            }
          	total_try++;
          	//console.log("Try->"+total_try);
        }
  	}
    
    var check_inprogress = setTimeout(check__easy_app_loaded, 500);
    
    
    


	document.addEventListener('click',(e) => {
      	if(e.target && e.target.id== 'toggle_save_price'){
          
          	const target_div = document.querySelector('#toggle_save_price');
          	const toggle_div = document.querySelector('#toggle_save_price').parentNode.nextSibling;
        	          
          	if(toggle_div.style.display === "none"){
            	toggle_div.style.display = "block";
              	target_div.innerHTML = "Close"
            }else{
              	toggle_div.style.display = "none";
              	target_div.innerHTML = "More Info";
            }
        }
    });
    
  });