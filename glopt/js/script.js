$(document).ready(function(){
    $('.carousel').slick({
        slidesToShow: 3,
        centerMode: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrowLeft.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrowRight.png"></button>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                  arrows: false,
                  slidesToShow: 1,
                  dots: true
                }
            }
           
        ]    
    });     

  // появление кнопки наверх , если спустились вниз на 1000px
    $(window).scroll(function() {
    if ($(this).scrollTop() > 1000) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
  });

  // плавная прокрутка 
    $("a[href=#up]").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
    });
    new WOW().init();  
   // маска ввода
  $('input[name=phone]').mask("+7 (999) 999-99-99");
 
  // бургер меню
	const menu = document.querySelector('.navbar__list'),
	menuItem = document.querySelectorAll('.navbar__item'),
	hamburger = document.querySelector('.hamburger');

	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('hamburger_active');
		menu.classList.toggle('navbar__list_active');
	});

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			hamburger.classList.toggle('hamburger_active');
			menu.classList.toggle('navbar__list_active');
		})
	});
});