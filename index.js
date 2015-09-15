const path = require('path')
const osenv = require('osenv')
const Cloudup = require('cloudup-client')
const pkg = require('./package')

var opts = require(path.resolve(osenv.home(), '.cloudup.json'))
opts.useragent = 'clouddown/' + pkg.version

var client = new Cloudup(opts)

client.streams(function(err, streams){
  streams.forEach(function(stream){
    stream.items(function(err, items){
      items.forEach(function(item){
        console.log(`  ${item.direct_url} ${item.filename}`)
      });
    });
  });
});
