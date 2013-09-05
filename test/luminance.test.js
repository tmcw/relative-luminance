var expect = require('expect.js'),
    luminance = require('../');

describe('luminance', function() {
    it('calculates lum of black', function() {
        expect(luminance([0, 0, 0])).to.eql(0);
    });
    it('calculates lum of white', function() {
        expect(luminance([255, 255, 255])).to.eql(1);
    });
});
