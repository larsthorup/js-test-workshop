describe('menu', function () {
    'use strict';
    var head;
    var body;

    beforeEach(function () {
        var $doc = $('<div></div>');
        head = $('<div id="head"></div>').appendTo($doc);
        body = $('<div id="body"></div>').appendTo($doc);
    });

    it('should render', function () {
        // when
        window.menu.render(head, body);

        // then
        expect(head.find('link').attr('href')).toBe('css/menu.css');
        expect(body.find('ul.menu li').length).toBe(3);
    });

});
