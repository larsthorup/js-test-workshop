/*global window, describe, beforeEach, afterEach, it, expect, $*/
describe('menu responsive', function () {
    'use strict';
    var fixture;
    var iframe;
    var items;

    beforeEach(function () {
        fixture = $('<div id="fixture"></div>').appendTo('body');
        iframe = $('<iframe></iframe>').appendTo(fixture); // Note: need to be in the DOM for styles to apply
        var $doc = $(iframe.get(0).contentDocument);
        window.menu.render($doc);
        items = $doc.find('.menu li');
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
