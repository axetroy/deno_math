export class Complex {
  real: number;
  imag: number;
  constructor(cmplx: Complex);
  constructor(real?: number, imag?: number);
  constructor(realOrCmplx: Complex | number = 0, imag = 0) {
    if (realOrCmplx instanceof Complex) {
      this.real = realOrCmplx.real;
      this.imag = realOrCmplx.imag;
    } else {
      this.real = realOrCmplx;
      this.imag = imag;
    }
  }

  add(v: number | Complex) {
    if (v instanceof Complex) {
      this.real += v.real;
      this.imag += v.imag;
    } else {
      this.real += v;
    }

    return this;
  }

  subtract(v: number | Complex) {
    if (v instanceof Complex) {
      this.real -= v.real;
      this.imag -= v.imag;
    } else {
      this.real -= v;
    }

    return this;
  }

  toString() {
    let op = "";
    if (this.imag >= 0) op = "+";
    return `${this.real}${op}${this.imag}im`;
  }
}
