var test = require('tape')
var sort = require('./index.js')(function (a, b) {
  return a.title.localeCompare(b.title)
})

test('it should sort using the provided function', function (t) {
  sort([{ title: 'réservé' }, { title: 'premier' }, { title: 'cliché' }, { title: 'communiqué' }, { title: 'café' }, { title: 'adieu' }], function (err, pages) {
    t.equal(null, err)

    t.deepEqual(pages, [ { title: 'adieu' }, { title: 'café' }, { title: 'cliché' }, { title: 'communiqué' }, { title: 'premier' }, { title: 'réservé' } ])

    t.end()
  })
})
