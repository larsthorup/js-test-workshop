describe('util.random', function () {
    'use strict';

    beforeEach(function () {
        spyOn(Math, 'random').and.returnValue(0.85);
    });

    describe('randomBelow', function () {

        it('should multiply correctly', function () {
            expect(Math.randomBelow(6)).toBe(5);
            expect(Math.randomBelow(1)).toBe(0);
            expect(Math.random.calls.count()).toBe(2);
            expect(Math.random.calls.argsFor(0).length).toBe(0);
        });

        it('should validate its arguments', function () {
            expect(function () { Math.randomBelow(0); }).toThrow('invalid argument: 0');
            // expect(Math.random).toHaveBeenCalledWith('abc', jasmine.any())
        });
    });
});

