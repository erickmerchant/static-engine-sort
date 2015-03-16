var assert = require('chai').assert;
var sort = require('../index.js');
var moment = require('moment');

describe('plugin', function(){

    describe('title.asc', function(){

        it('it should sort titles in alphabetical order', function(done){

            sort.title.asc([{ title: 'réservé' }, { title: 'premier' }, { title: 'cliché' }, { title: 'communiqué' }, { title: 'café' }, { title: 'adieu' }], function(err, pages){

                assert.deepEqual(pages, [ { title: 'adieu' }, { title: 'café' }, { title: 'cliché' }, { title: 'communiqué' }, { title: 'premier' }, { title: 'réservé' } ]);

                done();
            });
        });
    });

    describe('title.desc', function(){

        it('it should sort titles in reverse alphabetical order', function(done){

            sort.title.desc([{ title: 'réservé' }, { title: 'premier' }, { title: 'cliché' }, { title: 'communiqué' }, { title: 'café' }, { title: 'adieu' }], function(err, pages){

                assert.deepEqual(pages, [ { title: 'réservé' }, { title: 'premier' }, { title: 'communiqué' }, { title: 'cliché' }, { title: 'café' }, { title: 'adieu' } ]);

                done();
            });
        });
    });

    describe('date.asc', function(){

        it('it should sort dates oldest to newest', function(done){

            sort.date.asc([{date: moment('20120101', 'YYYYMMDD')}, {date: moment('20110101', 'YYYYMMDD')}, {date: moment('20130101', 'YYYYMMDD')}], function(err, pages){

                assert.deepEqual(pages, [{date: moment('20110101', 'YYYYMMDD')}, {date: moment('20120101', 'YYYYMMDD')}, {date: moment('20130101', 'YYYYMMDD')}]);

                done();
            });
        });
    });

    describe('date.desc', function(){

        it('it should sort dates newest to oldest', function(done){

            sort.date.desc([{date: moment('20120101', 'YYYYMMDD')}, {date: moment('20110101', 'YYYYMMDD')}, {date: moment('20130101', 'YYYYMMDD')}], function(err, pages){

                assert.deepEqual(pages, [{date: moment('20130101', 'YYYYMMDD')}, {date: moment('20120101', 'YYYYMMDD')}, {date: moment('20110101', 'YYYYMMDD')}]);

                done();
            });
        });
    });
});
