function pad(hex) {
  return hex.length === 1 ? '0' + hex : hex;
}

var converter = {
  rgbToHex: function(red, green, blue) {
    var redHex = red.toString(16);
    var greenHex = green.toString(16);
    var blueHex = blue.toString(16);
    return pad(redHex) + pad(greenHex) + pad(blueHex);
  },
  hexToRgb: function(hex) {
    var red = parseInt(hex.slice(0, 2), 16);
    var green = parseInt(hex.slice(2, 4), 16);
    var blue = parseInt(hex.slice(4, 6), 16);
    return [red, green, blue];
  },
};

module.exports = converter;
