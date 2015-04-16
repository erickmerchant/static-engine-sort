var assert = require('assert')
var describe = require('mocha').describe
var it = require('mocha').it
var sort = require('./index.js')(function (a, b) {
  return a.title.localeCompare(b.title)
})

describe('plugin', function () {
  it('it should sort using the provided function', function (done) {
    sort([{ title: 'réservé' }, { title: 'premier' }, { title: 'cliché' }, { title: 'communiqué' }, { title: 'café' }, { title: 'adieu' }], function (err, pages) {
      assert.equal(null, err)

      assert.deepEqual(pages, [ { title: 'adieu' }, { title: 'café' }, { title: 'cliché' }, { title: 'communiqué' }, { title: 'premier' }, { title: 'réservé' } ])

      done()
    })
  })
})
