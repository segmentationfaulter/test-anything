var assert = require('assert');
var isCoolNumber = require(process.argv[2]);

assert.ok(isCoolNumber(42), 'it is 42 only which is a cool number');
