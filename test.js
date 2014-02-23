var should = require('should');
var processTsv = require('./lib/parse');
var tsv2json = require('./');
var fs = require('fs');

describe('get tsv records and fieldname', function() {
	it('should extract fieldName and record', function(cb) {
		processTsv.processStream(__dirname + '/sample/sample.tsv', function(field, record) {
			field.should.be.an.instanceOf(Array)
			record.should.be.an.instanceOf(Array)
			cb()
		});
	})
})

// describe('tsv to json', function() {

// 	it('should convert tsv to json', function() {
// 		tsv2json({
// 			input: './sample/sample.tsv',
// 			output: null
// 		}, function(err, result) {
// 			should.not.exist(err)
// 			result.should.be.an.instanceOf(Object)
// 		})
// 	})

// 	it('should convert tsv to json file', function() {
// 		tsv2json({
// 			input: './sample/sample.tsv',
// 			output: './sample/test.json'
// 		}, function(err, result) {
// 			should.not.exist(err)
// 			result.should.be.an.instanceOf(Object)
// 		})

// 	})

// 	it('should read file in test.json', function() {
// 		var exist = fs.existsSync('./sample/test.json')
// 		exist.should.be.true;
// 	})

// })
