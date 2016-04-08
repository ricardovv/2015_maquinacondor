var setResponsive = function () {
  var pageHeight = jQuery(window).height();
  var spacing = solofolioGallery.layoutSpacing;

  if (solofolioBase.layoutMode == "horizon") {
    var headerHeight = jQuery('.header').outerHeight();
    jQuery('.solofolio-cyclereact-slide img').css('max-height', pageHeight - headerHeight - spacing - spacing);
  } else {
    jQuery('.solofolio-cyclereact-slide img').css('max-height', pageHeight - spacing - spacing);
  }
}

var showThumbs = function () {
  jQuery('.solofolio-cyclereact-gallery').cycle('pause');
  jQuery(".solofolio-cyclereact-sidebar, .solofolio-cyclereact-stage").hide();
  jQuery(".solofolio-cyclereact-thumbs").show();
}

var showGallery = function () {
  jQuery(".solofolio-cyclereact-sidebar, .solofolio-cyclereact-stage").show();
  jQuery(".solofolio-cyclereact-thumbs").hide();
}

var detectResize = function () {
  if (jQuery(window).width() > 1024) {
    jQuery('.solofolio-cyclereact-gallery').cycle();
  }

  if (jQuery(window).width() < 1025) {
    jQuery('.solofolio-cyclereact-gallery').cycle('pause');
    jQuery('.solofolio-cyclereact-slide .image img').each(function( i ) {
      if (jQuery(this).outerWidth() > 0) {
        var width = jQuery(this).outerWidth();
      } else {
        var width = "100%";
      }
      jQuery(this).show();
      jQuery(this).closest('.solofolio-cyclereact-slide').find('.wp-caption-text').css('max-width', width)
    });
  }
}

jQuery(document).on('lazybeforeunveil', (function(){
  var onLoad = function(e){
    detectResize();
  };
  return function(e){
    if(!e.isDefaultPrevented()){
      jQuery(e.target).filter('img').on('load error', onLoad);
    }
  };
})());

jQuery(window).load(function(){
  setResponsive();
  detectResize();

  jQuery(".thumbs").click(function(){
    showThumbs();
  });
  jQuery(".thumb a").click(function(){
    showGallery();
  });
});

jQuery(window).resize(function(){
  detectResize();
  setResponsive();
});

jQuery( '.solofolio-cyclereact-gallery' ).on( 'cycle-after', function( event, opts ) {
  showGallery();
});

jQuery( '.solofolio-cyclereact-gallery' ).on( 'cycle-before', function( event, opts ) {
  window.picturefill();
  setResponsive();
});

jQuery( '.solofolio-cyclereact-gallery' ).on( 'cycle-update-view', function( event, opts, slideOptionsHash, currentSlideEl) {
  jQuery(currentSlideEl).find('img').show();
  jQuery(".solofolio-cyclereact-count").html((opts.currSlide + 1) + " / " + opts.slideCount);
});

jQuery(document.documentElement).keyup(function (e) {
  if (jQuery(window).width() > 1024) {
    if (e.keyCode == 37) { jQuery('.solofolio-cyclereact-gallery').cycle('prev') }
    if (e.keyCode == 38) { jQuery('.thumbs').trigger('click') }
    if (e.keyCode == 39) { jQuery('.solofolio-cyclereact-gallery').cycle('next') }
  }
});

jQuery.fn.cycle.transitions.fadeOutIn = {
  transition: function( slideOpts, currEl, nextEl, fwd, callback ) {
    var opts = slideOpts,
        curr = jQuery(currEl),
        next = jQuery(nextEl),
        speed = opts.speed / 2;

    next.css({
        'display': 'none',
        'visibility': 'visible',
        'opacity': 1,
    });

    curr.fadeOut(500,function(){
      next.fadeIn(500, function(){
        callback();
      });
    });
  }
}
