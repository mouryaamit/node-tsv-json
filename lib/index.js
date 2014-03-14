var fs = require('fs');
var path = require('path');
var parse = require('./parse');

exports = module.exports = tsv_json;

function tsv_json (config, callback) {
  if(!config.input) {
    console.error("You miss a input file");
    process.exit(1);
  }

  config.output = config.output || null;

  var cv = new CV(config, callback);
  
}

function CV(config, callback) {
  var that = this;
  parse.processStream(path.resolve(config.input), function(field, records) {
    that.remake(field, records, function(arr) {
      that.cvjson(arr, config.output, function(err, result) {
        callback(err, result);
      })
    })
  })
}

CV.prototype.remake = function(field, record, callback) {
  var remake_arr = []
  for (var i = 0; i < record.length; i++) {
    var obj = {}
    for (var j = 0; j < field.length; j++) {
      obj[field[j].trim()] = record[i][j].trim();
    }
    remake_arr.push(obj)
  };
  callback(remake_arr)
}

CV.prototype.cvjson = function(record, output, callback) {
  if(output !== null) {
    var stream = fs.createWriteStream(output, { flags : 'w' });
    stream.write(JSON.stringify(record));
    callback(null, record);
  }else {
    callback(null, record);
  }
}
