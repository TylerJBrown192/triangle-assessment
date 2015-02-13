describe('triangle', function() {

  it("will return a string when three integers are put in", function() {
    expect(triangle([3, 4, 5])).to.equal("This isn't a triangle!");
  });

  it("will return Equilateral when three of the same numbers are put in", function() {
    expect(triangle([3, 3, 3])).to.equal("Equilateral Triangle");
  });

  it("will return Isosceles when two of the numbers are the same", function() {
    expect(triangle([3, 4, 3])).to.equal("Isosceles Triangle");
  });

  it("will return Scalene if none of the numbers match, but two of the sides add to the third", function() {
    expect(triangle([2, 4, 6])).to.equal("Scalene Triangle");
  });

});
