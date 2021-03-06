let materialRipple = (function() {
	let circle = document.getElementById('js-ripple'),
			ripple = document.querySelectorAll('.js-ripple');

	function rippleAnimation(event, timing) {
		let tl           = new TimelineMax(),
				x            = event.offsetX,
				y            = event.offsetY,
				w            = event.target.offsetWidth,
				h            = event.target.offsetHeight,
				offsetX      = Math.abs( (w / 2) - x ),
				offsetY      = Math.abs( (h / 2) - y ),
				deltaX       = (w / 2) + offsetX,
				deltaY       = (h / 2) + offsetY,
				scale_ratio  = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

		tl.fromTo(ripple, timing, {
			x: x,
			y: y,
			transformOrigin: '50% 50%',
			scale: 0,
			opacity: 1,
			ease: Linear.easeInOut
		}, {
			scale: scale_ratio,
			opacity: 0
		});

		return tl;
	}

	return {
		init: function(target, timing) {
			let button = document.getElementById(target);

			if(button) {
				button.addEventListener('click', function(event) {
					rippleAnimation.call(this, event, timing);
				});
			}
		}
	};
	})();

	materialRipple.init('js-ripple-btn', 0.575);
