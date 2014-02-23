# node-tsv-json

convert tsv to json format.

## Install

```
  npm install tsv-to-json
```

## Usage

```javascript
  tsv = require("tsv-to-json");
  tsv({
    input: "sample.tsv", 
    output: "output.json"
  }, function(err, result) {
    if(err) {
      console.error(err);
    }else {
      console.log(result);
    }
  });
```

In config object, you have to enter an input path. But If you don't want to output any file you can set to `null`.

## License 

MIT [@chilijung](http://github.com/chilijung)