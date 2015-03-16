var now = require('moment')();

function sortDate(pages, reverse) {

    pages.sort(function(a, b) {

        a = a.date || now;

        b = b.date || now;

        return reverse ? b.diff(a) : a.diff(b);
    });

    return pages;
}

function sortTitle(pages, reverse) {

    pages.sort(function(a, b) {

        a = a.title || '';

        b = b.title || '';

        return reverse ? b.localeCompare(a) : a.localeCompare(b);
    });

    return pages;
}

module.exports = {

    date: {

        asc: function (pages, done) {

            done(null, sortDate(pages));
        },

        desc: function (pages, done) {

            done(null, sortDate(pages, true));
        }
    },

    title: {

        asc: function (pages, done) {

            done(null, sortTitle(pages));
        },

        desc: function (pages, done) {

            done(null, sortTitle(pages, true));
        }
    }
};
