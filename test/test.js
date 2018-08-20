const test = require("tape");
const luminance = require("../");

test("luminance", t => {
  t.equal(luminance([0, 0, 0]), 0, "black");
  t.equal(luminance([255, 255, 255]), 1, "white");
  t.end();
});
