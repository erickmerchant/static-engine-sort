var Promise = require('es6-promise').Promise;
var now = require('moment')();

module.exports = {

    date: function (pages) {

        pages.sort(function(a, b) {

            a = a.date || now;

            b = b.date || now;

            return b.diff(a);
        });

        return Promise.resolve(pages);
    }
};
