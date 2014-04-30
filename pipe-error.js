/*
 * Copyright (C) 2014 Spanning Cloud Apps. All rights reserved.
 */

var fs = require('fs'),
  request = require('request');

var readStream = request({
  url: 'https://gist.githubusercontent.com/joe-spanning/6902070/raw/8967b351aec744a2bb51c16cb847c44636cf53d9/pipepromise.js'
});

// wait for 5 seconds, then pipe
setTimeout(function() {

  //var writeStream = readStream.pipe(zlib.createGzip()).pipe(fs.createWriteStream('hi.zip'));
  var writeStream = readStream.pipe(fs.createWriteStream('pipepromise.js'));

  writeStream.on('finish', function() {
    console.log('all done!');
  });
  
  writeStream.on('error', function(err) {
    console.error(err);
  });
  
}, 5000);