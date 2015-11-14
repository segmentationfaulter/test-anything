'use strict';
const test = require('tape');
const func = require(process.argv[2]);

test('Test if callback is called n times', (t) => {
  t.plan(10);
  func(10, () => {
    t.pass('I am called')
  });
});
