window.addEventListener('load', function () {
	let nav = document.querySelector('nav');
	let menuBtn = document.querySelector('.menu_btn');


	// menu button click => acitve class add
	menuBtn.addEventListener('click', function (){
		nav.classList.toggle("active");
	});


});




