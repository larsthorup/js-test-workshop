/*global describe, it, expect, window */
describe('util.later', function () {
    'use strict';

    describe('add', function () {

        it('should add correctly', function (done) {
            window.later.add(2, 3, function (err, sum) {
                expect(err).toBe(null);
                expect(sum).toBe(5);
                done();
            });
        });

    });

    describe('adding', function () {

        it('should add correctly', function (done) {
            var adding = window.later.adding(2, 3);
            adding.then(function (sum) {
                expect(sum).toBe(5);
                done();
            });
        });

    });
});

