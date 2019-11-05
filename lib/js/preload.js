$(window).on("unload", function() {
	$("#preload").fadeIn()
	$('body').addClass('ov-h')
});
$(window).on("load", function() {
	function loadPage(){
		$("#preload").fadeOut()
		$('body').removeClass('ov-h')

		AOS.init({
			duration: 1000,
			once: true,
		})
	}
	setTimeout(loadPage, 700);
});