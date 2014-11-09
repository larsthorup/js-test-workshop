(function (window, $) {
    'use strict';

    var delay = 100;

    function add(a, b, cb) {
        window.setTimeout(function () {
            cb(null, a + b);
        }, delay);
    }

    function adding(a, b) {
        var deferred = $.Deferred();
        window.setTimeout(function () {
            deferred.resolve(a + b);
        }, delay);
        return deferred.promise();
    }

    window.later = {
        delay: delay,
        add: add,
        adding: adding
    };
})(window, jQuery);