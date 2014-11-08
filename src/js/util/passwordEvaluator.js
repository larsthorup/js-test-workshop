/*global window*/
(function (window) {
    'use strict';

    window.passwordEvaluator = {
        strength: function (password) {
            var result = 0;
            if (password.length > 4) {
                result += 1;
            }
            return result;
        }
    };
})(window);
