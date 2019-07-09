var bmp = require("bmp-js");
var fs = require("fs");
var bmpData = {
    data, //Buffer
    width, //Number
    height //Number
};
var rawData = bmp.encode(bmpData); //defaults to no compression
fs.WriteFileSync('./image.bmp', rawData.data);