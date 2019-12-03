export class Complex {
  real: number;
  imag: number;
  constructor(cmplx: Complex);
  constructor(real: number, imag: number);
  constructor(realOrCmplx: Complex | number, imag = 0) {
    if (realOrCmplx instanceof Complex) {
      this.real = realOrCmplx.real;
      this.imag = realOrCmplx.imag;
    } else {
      this.real = realOrCmplx;
      this.imag = imag;
    }
  }

  toString() {
    let op = "";
    if (this.imag >= 0) op = "+";
    return `${this.real}${op}${this.imag}im`;
  }
}
