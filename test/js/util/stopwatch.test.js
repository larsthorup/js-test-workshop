describe('util.stopwatch', function () {
  'use strict';

  beforeEach(function () {
    jasmine.clock().install();
    jasmine.clock().mockDate();
  });

  afterEach(function () {
    jasmine.clock().uninstall();
  });

  describe('time', function () {

    function slow (cb) {
      window.setTimeout(function () {
        cb();
      }, 1700);
    }

    it('should measure the time it takes', function (done) {
      window.stopwatch.time(slow, function (err, time) {
        expect(err).toBe(null);
        expect(time).toBe(1700);
        done();
      });
      jasmine.clock().tick(1700);
    });

  });

  describe('timing', function () {

    function slowing () {
      var deferred = $.Deferred();
      window.setTimeout(function () {
        deferred.resolve();
      }, 1700);
      return deferred.promise();
    }

    it('should measure the time it takes', function (done) {
      window.stopwatch.timing(slowing).then(function (time) {
        expect(time).toBe(1700);
        done();
      });
      jasmine.clock().tick(1700);
    });

  });
});

