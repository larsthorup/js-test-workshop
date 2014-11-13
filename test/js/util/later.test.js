describe('util.later', function () {
    'use strict';

    describe('add, slow', function () {

        it('should add correctly', function (done) {
            window.later.add(2, 3, function (err, sum) {
                expect(err).toBe(null);
                expect(sum).toBe(5);
                done();
            });
        });

    });

    describe('adding, slow', function () {

        it('should add correctly', function (done) {
            var adding = window.later.adding(2, 3);
            adding.then(function (sum) {
                expect(sum).toBe(5);
                done();
            });
        });

    });

    describe('adding, fast', function () {

        beforeEach(function () {
            jasmine.clock().install();
        });

        afterEach(function () {
            jasmine.clock().uninstall();
        });

        it('should add correctly', function (done) {
            window.later.add(2, 3, function (err, sum) {
                expect(err).toBe(null);
                expect(sum).toBe(5);
                done();
            });
            jasmine.clock().tick(window.later.delay);
        });

        it('should add correctly', function (done) {
            var adding = window.later.adding(2, 3);
            jasmine.clock().tick(window.later.delay);
            adding.then(function (sum) {
                expect(sum).toBe(5);
                done();
            });
        });

    });
});

