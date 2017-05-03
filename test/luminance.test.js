var expect = require("expect.js");
var luminance = require("../");
var jsc = require("jsverify");

describe("luminance", function() {
  it("calculates lum of black", function() {
    expect(luminance([0, 0, 0])).to.eql(0);
  });
  it("calculates lum of white", function() {
    expect(luminance([255, 255, 255])).to.eql(1);
  });
  jsc.property(
    "always is between 0 and 1",
    jsc.tuple([jsc.integer(0, 255), jsc.integer(0, 255), jsc.integer(0, 255)]),
    function(rgb) {
      return luminance(rgb) >= 0 && luminance(rgb) <= 1;
    }
  );
});
