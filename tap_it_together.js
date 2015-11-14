'use strict';
const fancify = require(process.argv[2]);
const test = require('tape');

test('fancify makes strings fancier', (t) => {
  t.equal(fancify('hello'), '~*~hello~*~', 'String should be wrapped in ~*~');
  t.equal(fancify('hello', true), '~*~HELLO~*~', 'String should be wrapped in ~*~ and capitalized')
  t.equal(fancify('hello', true, '$'), '~$~HELLO~$~', 'The middle character specified in third arg should appear');
  t.end();
});
