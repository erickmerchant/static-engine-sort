module.exports = function(sorter) {

    return function (pages, done) {

        pages.sort(sorter);

        done(null, pages);
    };
};
