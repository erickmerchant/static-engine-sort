var now = require('moment')();

function date_sort(pages) {

    pages.sort(function(a, b) {

        a = a.date || now;

        b = b.date || now;

        return b.diff(a);
    });

    return pages;
}

function date(pages, done) {

    done(null, date_sort(pages));
}

date.desc = date;

date.asc = function (pages, done) {

    done(null, date_sort(pages).reverse());
}

function title_sort(pages) {

    pages.sort(function(a, b) {

        a = a.title || '';

        b = b.title || '';

        return a.localeCompare(b);
    });

    return pages;
}

function title(pages, done) {

    done(null, title_sort(pages));
}

title.asc = title;

title.desc = function (pages, done) {

    done(null, title_sort(pages).reverse());
}

module.exports = {

    date: date,

    title: title
};
