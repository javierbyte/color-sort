var tinycolor = require('tinycolor2')

function sortColors(colorArray) {
  return colorArray.sort(function(colorA, colorB) {
    return tinycolor(colorA).toHsv().h - tinycolor(colorB).toHsv().h
  })
}

module.exports = sortColors