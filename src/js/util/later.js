    /*global window, jQuery*/
    (function (window, $) {
        'use strict';

        function add(a, b, cb) {
            window.setTimeout(function () {
                cb(null, a + b);
            }, 100);
        }

        function adding(a, b) {
            var deferred = $.Deferred();
            window.setTimeout(function () {
                deferred.resolve(a + b);
            }, 100);
            return deferred.promise();
        }

        window.later = {
            add: add,
            adding: adding
        };
    })(window, jQuery);