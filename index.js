// # Relative luminance
//
// http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
// https://en.wikipedia.org/wiki/Luminance_(relative)
// https://en.wikipedia.org/wiki/Luminosity_function
// https://en.wikipedia.org/wiki/Rec._709#Luma_coefficients

// red, green, and blue coefficients
var rc = 0.2126,
  gc = 0.7152,
  bc = 0.0722,
  // low-gamma adjust coefficient
  lowc = 1 / 12.92;

function adjustGamma(_) {
  return Math.pow((_ + 0.055) / 1.055, 2.4);
}

/**
 * Given a 3-element array of R, G, B varying from 0 to 255, return the luminance
 * as a number from 0 to 1.
 * @param {Array<number>} rgb 3-element array of a color
 * @returns {number} luminance, between 0 and 1
 * @example
 * var luminance = require('relative-luminance');
 * var black_lum = luminance([0, 0, 0]); // 0
 */
function relativeLuminance(rgb) {
  var rsrgb = rgb[0] / 255;
  var gsrgb = rgb[1] / 255;
  var bsrgb = rgb[2] / 255;

  var r = rsrgb <= 0.03928 ? rsrgb * lowc : adjustGamma(rsrgb),
    g = gsrgb <= 0.03928 ? gsrgb * lowc : adjustGamma(gsrgb),
    b = bsrgb <= 0.03928 ? bsrgb * lowc : adjustGamma(bsrgb);

  return r * rc + g * gc + b * bc;
}

module.exports = relativeLuminance;
