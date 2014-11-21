describe('menu css', function () {
    'use strict';
    var fixture;
    var iframe;
    var items;

    beforeEach(function () {
        var menuCss = $.ajax('/base/src/css/menu.css', {async: false}).responseText;
        fixture = $('<div id="fixture"></div>').appendTo('body');
        iframe = $('<iframe></iframe>').appendTo(fixture); // Note: need to be in the DOM for styles to apply
        var $doc = $(iframe.get(0).contentDocument);
        $('<style></style>').text(menuCss).appendTo($doc.find('head'));
        var menuHtml = $('<ul class="menu"><li>Item 1</li><li>Item 2</li></ul>').appendTo($doc.find('body'));
        items = menuHtml.find('li');
    });

    afterEach(function () {
        fixture.remove();
    });

    it('should turn horizontal when wide', function () {
        // when
        iframe.attr('width', '401px');

        // then
        expect(items.eq(0).offset().left).toBeLessThan(items.eq(1).offset().left);
        expect(items.eq(0).offset().top).toBe(items.eq(1).offset().top);
    });

    it('should turn vertical when narrow', function () {
        // when
        iframe.attr('width', '400px');

        // then
        expect(items.eq(0).offset().top).toBeLessThan(items.eq(1).offset().top);
        expect(items.eq(0).offset().left).toBe(items.eq(1).offset().left);
    });
});
