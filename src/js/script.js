'use strict';

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.nav-menu'),
		menuItem = document.querySelectorAll('.nav-menu__list-item');

hamburger.addEventListener('click', (evt) => {
	hamburger.classList.toggle('hamburger_active');
	menu.classList.toggle('nav-menu_active');
});

menuItem.forEach(item => {
	item.addEventListener('click', () => {
		 hamburger.classList.toggle('hamburger_active');
		 menu.classList.toggle('nav-menu_active');
	});
});

$(document).ready(function(){
	$("a[href*='#']").on("click", function(e){
	  var anchor = $(this);
	  $('html, body').stop().animate({
		 scrollTop: $(anchor.attr('href')).offset().top
	  }, 777);
	  e.preventDefault();
	  return false;
	});
 });