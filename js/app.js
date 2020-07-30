// Scroll para seções
(function() {
let navBtn = $('.nav-item');

let homeSection = $('#home');
let contatoSection = $('#contato');
let portfolioSection = $('#portfolio');

let scrollTo = '';

$(navBtn).click(function() {

    let btnId = $(this).attr('id');

    console.log(btnId);

    if (btnId == 'home-menu') {
        scrollTo = homeSection;
    } else if (btnId == 'contato-menu') {
        scrollTo = contatoSection;
    } else {
        scrollTo = portfolioSection;
    }

    $([document.documentElement, document.body]).animate({
        scrollTop: $(scrollTo).offset().top - 70
    }, 1500);

});

}());

// Animar ao Scroll

// Debounce do Lodash
debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


(function(){
	var $target = $('.anime'),
			animationClass = 'anime-start',
			offset = $(window).height() * 3/4;

	function animeScroll() {
		var documentTop = $(document).scrollTop();

		$target.each(function(){
			var itemTop = $(this).offset().top;
			if (documentTop > itemTop - offset) {
				$(this).addClass(animationClass);
			} else {
				$(this).removeClass(animationClass);
			}
		});
	}

	animeScroll();

	$(document).scroll(debounce(function(){
		animeScroll();
	}, 200));
})();



