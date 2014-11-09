describe('BlogPost', function () {
    'use strict';

    var post;

    beforeEach(function () {
        jasmine.clock().install();
        jasmine.clock().mockDate(new Date(2014, 11, 13));
        post = new window.BlogPost({title: 'better testing'});
    });

    afterEach(function () {
        jasmine.clock().uninstall();
    });

    describe('age', function () {

        beforeEach(function () {
            jasmine.clock().tick(42000);
        });

        // ToDo: only works with jasmine-2.0.2, not yet in karma-jasmine
        xit('compute age correctly', function () {
            expect(post.age()).toBe(42000);
        });
    });
});