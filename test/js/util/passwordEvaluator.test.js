describe('util.passwordEvaluator', function () {
    'use strict';

    var pw;

    beforeEach(function () {
        pw = window.passwordEvaluator;
    });

    it('should return 0 when password is really bad', function () {
        expect(pw.strength('abc')).toBe(0);
    });

    it('should return 1 when length is larger than 4', function () {
        expect(pw.strength('china')).toBe(1);
    });
});
