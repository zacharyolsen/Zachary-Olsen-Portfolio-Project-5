$(document).ready(function() {
		$(".fancybox").fancybox();
	});

// external js: isotope.pkgd.min.js

	$('.grid').isotope({
	  itemSelector: '.grid-item',
	  masonry: {
	    columnWidth: '.grid-sizer'
	  }
	});
