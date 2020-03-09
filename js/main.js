$(window).scroll(function() {
	let top = $(document).scrollTop();
	if (top < 300) {
		$(".header").removeClass('fixed');
	}
		else {
			$(".header").addClass('fixed');
		}
});

jQuery(window).scroll(function(){
	let $sections = $('section');
$sections.each(function(i,el){
 	let top  = $(el).offset().top-150;
 	let bottom = top +$(el).height();
 	let scroll = $(window).scrollTop();
 	let id = $(el).attr('id');
if( scroll > top && scroll < bottom){
		 $('a.active').removeClass('active');
$('a[href="#'+id+'"]').addClass('active');

 }
})
});

$("nav").on("click","a", function (event) {
 // исключаем стандартную реакцию браузера
 event.preventDefault();

 // получем идентификатор блока из атрибута href
 var id  = $(this).attr('href'),

 // находим высоту, на которой расположен блок
		 top = $(id).offset().top;
	
 // анимируем переход к блоку, время: 800 мс
 $('body,html').animate({scrollTop: top}, 800);
});


let modal = document.getElementById('modal');
let btn = document.getElementById('callback');
let close = document.getElementsByClassName("close")[0];

btn.onclick = function () {
	modal.style.display = "block";
}

close.onclick = function () {
	modal.style.display = "none";
}

window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};