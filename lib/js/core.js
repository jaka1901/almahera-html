$(window).resize(function(){
  var ww = $(window).width()
  if (ww<=468){
  	$('#bantu .swiper-wrapper').clone().appendTo('#cloneBantu');
  	$('.bantu-wrap').remove();
  	$('.filter-menu').removeAttr('data-aos');
  }
})
$(window).trigger('resize')


var swiper = new Swiper('#testi', {
	// autoHeight: true, //enable auto height
	pagination: {
		el: '.testi-wrap .control-pagination',
		clickable: true
	},
	grabCursor: true,
	slidesPerView: 'auto',
	// spaceBetween: 100,
	breakpoints: {
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		640: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		320: {
			slidesPerView: 1,
			spaceBetween: 10,
		}
	},
});

$('.headline').paroller({
	factor: 0.3,
    transition: 'transform .2s linear' // CSS transition
});
$('#how').paroller({
	factor: 0.3,
    transition: 'transform .2s linear' // CSS transition
});
$('.footer').paroller({
	factor: 0.4,
    transition: 'transform .2s linear' // CSS transition
});


var pageHeader = $('.page-header').outerHeight();
$(window).scroll(function () {
  var iCurScrollPos = $(this).scrollTop();
  var footerH = $('.footer').outerHeight() * 2;
  var infiniteScroll = document.body.scrollHeight - footerH;
  var navCore = $('.navbar-core');

  if (iCurScrollPos > 1) {
  	if(!navCore.hasClass('not-changed')){
	    $('.navbar-core').addClass('scroll');
	    $('.navbar-core').removeClass('scrolled');
	}
  }else{
  	if(!navCore.hasClass('not-changed')){
	    $('.navbar-core').addClass('scrolled');
	    $('.navbar-core').removeClass('scroll');
  	}
  }
});

$(document).ready(function(){
	$(window).scrollTop($(this).scrollTop()-1);
})

$('.toggleSearch, .backdrop').click(function(e){
	e.preventDefault();

	$('.form-cari').toggleClass('active');
})

$('.fix-bottom-btn').on('shown.bs.dropdown', function () {
	$('.fix-bottom').removeAttr('style');
})

$('#chatus').submit(function(e){
	e.preventDefault();
	var parent = '6287885366214';
	var nama = $('#nama').val();
	var nohp = $('#nohp').val();
	var alamat = $('#alamat').val();
	
	if(nohp.charAt(0) == 0){
		nohp = "62"+nohp.slice(1)
	}
	
	var msg = 'https://api.whatsapp.com/send?phone='+parent+'&text=Saya ingin mendaftar untuk berlangganan Air%20Mineral Almahera.%0D%0ANama%3A '+nama.toUpperCase()+'%0D%0ANomor HP%3A '+nohp+'%0D%0AAlamat%3A '+alamat;

	$('#chatus').trigger("reset");
	daftar.slideTo(0)

	$('#namaNext').addClass('btn-light')
	$('#namaNext').removeClass('btn-warning')
	$('#namaNext').attr('disabled','disabled')
	
	window.open(msg, '_blank');
})

var daftar = new Swiper('#daftar', {
	spaceBetween: 30,
	noSwiping: true,
	autoHeight: true,
	noSwipingClass: '.swiper-wrapper',
	pagination: {
		el: '#chatus .swiper-pagination',
		type: 'fraction',
	},
});

// global function -------------------------------
function validasi(el, btn){
	$(el).keyup(function(e){
		e.preventDefault();
		var a = $(this).is(':valid');
		var b = $(this).is('[disabled]');
		if(a || b){
			$(btn).addClass('btn-warning')
			$(btn).removeClass('btn-light')
			$(btn).removeAttr('disabled')
		}else{
			$(btn).addClass('btn-light')
			$(btn).removeClass('btn-warning')
			$(btn).attr('disabled','disabled')
		}
	})
}

function clickToNext(el, slide){
	$(el).click(function(e){
		e.preventDefault();
		if($(this).hasClass('btn-warning')){
			daftar.slideTo(slide)
		}
	})
}

$('.clickPrev').click(function(){
	daftar.slidePrev();
})

// validasi function -------------------------------
validasi('#nama','#namaNext');
validasi('#nohp','#HPNext');
validasi('#alamat','#alamatNext');

// slide to specific page
clickToNext('#namaNext',1);
clickToNext('#HPNext',2);
