(function (window) {
  'use strict';

  function time(fn, cb) {
    var start = Date.now();
    fn(function () {
      var stop = Date.now();
      cb(null, stop - start);
    });
  }

  function timing(fn) {
    var deferred = $.Deferred();
    var start = Date.now();
    fn().then(function () {
      var stop = Date.now();
      deferred.resolve(stop - start);
    });
    return deferred.promise();
  }

  window.stopwatch = {
    time: time,
    timing: timing
  };
})(window);