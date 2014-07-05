var csv = require('csv-streamify'),
    fs = require('fs')

var fstream = fs.createReadStream('../tsv/100000.tsv'),
    parser = csv({delimiter: '	'}, callback /* optional */)

// emits each line as a buffer or as a string representing an array of fields
parser.on('readable', function () {
  var line = parser.read()
  // do stuff with data as it comes in

  // current line number
  console.log(parser.lineNo)
})

// AND/OR
function callback(err, doc) {
  if (err) return console.error(err)

  // doc is an array of row arrays
  doc.forEach(function (row) { console.log(row) })
}

// now pump some data into it (and pipe it somewhere else)
fstream.pipe(parser)

