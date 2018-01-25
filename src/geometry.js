class Circle {
  constructor(r) {
    this.r = r;
  }

  calcArea() {
    return Math.PI * (this.r * this.r);
  }

  calcCircumference() {
    return 2 * Math.PI * this.r;
  }
}

class Cylinder extends Circle{
  constructor(r, h) {
    super(r);
    this.h = h;
  }

  calcVolume() {
    return super.calcArea() * this.h;
  }

  calcOutsideSurface() {
    return super.calcCircumference() * this.h;
  }
}
