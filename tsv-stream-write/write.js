var csv = require('csv-write-stream');
var fs = require('fs');

var writer = csv({seperator: '	', sendHeaders: true})

writer.pipe(fs.createWriteStream('out.tsv'))
writer.write({hello: "world", foo: "bar", baz: "taco"})
writer.end()
