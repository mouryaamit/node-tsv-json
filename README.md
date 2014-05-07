# node-tsv-json

[![Build Status](https://travis-ci.org/DataGarage/node-tsv-json.png?branch=master)](https://travis-ci.org/DataGarage/node-tsv-json)

convert tsv to json format.

## Install

```
  npm install node-tsv-json
```

## Usage

```javascript
  tsv = require("node-tsv-json");
  tsv({
    input: "sample.tsv", 
    output: "output.json"
    //array of arrays, 1st array is column names
    ,parseRows: true
  }, function(err, result) {
    if(err) {
      console.error(err);
    }else {
      console.log(result);
    }
  });
```

In config object, you have to enter an input path. But If you don't want to output any file you can set to `null`.

Add `parseRows: true` to the config object to output an array of arrays where the first element is an array of column names followed by arrays of values.

## License 

MIT [@chilijung](http://github.com/chilijung)
