class Circle {
  constructor(r) {
    this.r = r;
  }

  calcArea() {
    this.area = Math.PI * (this.r * this.r);
    return this.area;
  }

  calcCircumference() {
    this.circumference = 2 * Math.PI * this.r;
    return this.circumference;
  }
}
