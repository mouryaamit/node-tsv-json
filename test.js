var should = require('should');
var tsv2json = require('../');
var fs = require('fs');

describe('tsv to json', function() {

	it('should convert tsv to json', function() {
		tsv2json({
			input: './sample/sample.tsv',
			output: null
		}, function(err, result) {
			should.not.exist(err)
			result.should.be.an.instanceOf(Object)
		})
	})

	it('should convert tsv to json file', function() {
		tsv2json({
			input: './sample/sample.tsv',
			output: './sample/test.json'
		}, function(err, result) {
			should.not.exist(err)
			result.should.be.an.instanceOf(Object)
		})

	})

	it('should read file in test.json', function() {
		var exist = fs.existsSync('./sample/test.json')
		exist.should.be.true;
	})

})
