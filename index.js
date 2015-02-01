var now = require('moment')();

module.exports = {

    date: function (pages, done) {

        pages.sort(function(a, b) {

            a = a.date || now;

            b = b.date || now;

            return b.diff(a);
        });

        done(null, pages);
    }
};
