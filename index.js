#!/usr/bin/env node

var request = require('request');
var pngparse = require("pngparse")
var arr = [
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0]
];

request({ url: 'http://identicons.github.com/jedireza.png', encoding: null }, function (error, response, body) {
  pngparse.parse(body, function(err, data) {
    if (err) {
      return console.error(err);
    }
    
    for (var y = 70, row = 0; y < 420 ; y += 70, row++) {
      for (var x = 70, col = 0; x < 420 ; x += 70, col++) {
        if (data.getPixel(x, y) !== 4042322175) {
          arr[row][col] = 1;
        }
      }
    }
    
    console.log(arr);
  });
});
