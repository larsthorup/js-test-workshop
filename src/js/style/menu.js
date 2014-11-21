(function (window, $) {
    'use strict';

    function render(head, body) {
        $('<link href="css/menu.css" rel="stylesheet" type="text/css">').appendTo(head);
        var menu = $('<ul></ul>').addClass('menu').appendTo(body);
        ['Home', 'Products', 'Support'].forEach(function (item) {
            $('<li></li>').text(item).appendTo(menu);
        });
    }

    window.menu = {
        render: render
    };

})(window, jQuery);