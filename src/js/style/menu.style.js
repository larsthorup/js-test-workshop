/*global window, jQuery*/
(function (window, $) {
    'use strict';

    var menuCss = '.menu li { list-style: none; }';
    var menuCssWide = '@media (min-width: 401px) { .menu li { float: left; } }';
    var menuCssNarrow = '@media (max-width: 400px) { .menu li { float: none; width: 100%; } }';

    function render($doc) {
        $('<style></style>').text(window.menu.style).appendTo($doc.find('head'));
        $(window.menu.html).appendTo($doc.find('body'));
    }

    window.menu = {
        style: menuCss + menuCssWide + menuCssNarrow,
        html: '<ul class="menu"><li>Item 1</li><li>Item 2</li></ul>',
        render: render
    };

})(window, jQuery);