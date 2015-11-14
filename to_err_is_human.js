'use strict';
const test = require('tape');
const feedCat = require(process.argv[2]);

test('Check if cat is fed with something harmful', (t) => {
  t.equal(feedCat('anything'), 'yum', 'Cat enjoys it');
  t.throws(() => {
    feedCat('chocolate');
  });
  t.end();
});
