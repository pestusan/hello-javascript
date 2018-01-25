describe("Circle", function() {
  var circle1;

  beforeEach(function() {
    this.circle1 = new Circle(2);
  });

  it("test calcArea", function() {
    var area = this.circle1.calcArea();
    expect(area).toEqual(12.566370614359172);
  });

  it("test calcCircumference", function() {
    var circumference = this.circle1.calcCircumference();
    expect(circumference).toEqual(12.566370614359172);
  });
});

describe("Cylinder", function() {
  var cylinder1;

  beforeEach(function() {
    this.cylinder1 = new Cylinder(1, 2);
  });

  it("test calcArea", function() {
    var area = this.cylinder1.calcArea();
    expect(area).toEqual(3.141592653589793);
  });

  it("test calcCircumference", function() {
    var circumference = this.cylinder1.calcCircumference();
    expect(circumference).toEqual(6.283185307179586);
  });

  it("test calcVolume", function() {
    var expectedValue = this.cylinder1.calcVolume();
    expect(expectedValue).toEqual(6.283185307179586);
  });

  it("test calcOutsideSurface", function() {
    var expectedValue = this.cylinder1.calcOutsideSurface();
    expect(expectedValue).toEqual(12.566370614359172);
  });
});
