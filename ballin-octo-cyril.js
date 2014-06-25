/*
 * ballin-octo-cyril.js 0.2
 *   Stefan Große <stefan@syscfg.net>, 2014-06-25
 *
 * A simple JavaScript img src switcher for high density displays. The name was suggested by GitHub.
 *
 * If the script detects a device with a higher pixel density window.devicePixelRatio than 1,
 * it switches the image src to a high resolution image src and back.
 *
 * Usage: <img src="path/to/low/res.png" class="boc" data-boc-hires="path/to/high/res.png" />
 *
*/

var retina, _operate = false;

$(document).ready( function() {
  setBocAttributes();
  return boc();
});

$(window).on("load", function() {
  return boc();
});

$( window ).resize( function() {
  if( _operate !== false )
    clearTimeout( _operate );
    _operate = setTimeout( function() { 
      return boc();
  }, 200 );
})

window.boc = function() {
  attr_src = "";
  retina = window.devicePixelRatio > 1;
  if (retina === true) {
    attr_src = "boc-hires";
  } else {
    attr_src = "boc-lowres";
  }
  return $( ".boc" ).each( function() {
    return $( this ).attr( "src", $( this ).data( attr_src ) );
  });
};

setBocAttributes = function() {
  return $( ".boc" ).each( function() {
    return $( this ).data( "boc-lowres", $( this ).attr( "src" ) );
  });
}
