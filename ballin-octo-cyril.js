/*
 * ballin-octo-cyril.js
 *   Stefan Große <stefan@syscfg.net>, 2014-06-24
 *
 * A simple JavaScript img src switcher for high density displays. The name was suggested by GitHub.
 *
 * If the script detects a device with a higher pixel density window.devicePixelRatio than 1,
 * it switches the image src to a high resolution image src and back.
 *
 * Usage: <img src="path/to/low/res.png" class="ballin-octo-cyril" data-src="path/to/low/res.png" data-hires="path/to/high/res.png" />
 *
*/

var retina;

retina = false;

$(document).ready(function() {
  return lazyload();
});

$(window).on("load", function() {
  return lazyload();
});

$(window).on("resize", function() {
  return lazyload();
});

window.lazyload = function() {
  var attr_src;
  retina = window.devicePixelRatio > 1;
  if (retina === true) {
    attr_src = "hires";
  } else {
    attr_src = "src";
  }
  return $(".ballin-octo-cyril").each(function() {
    return $(this).attr("src", $(this).data(attr_src));
  });
};
