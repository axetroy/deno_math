export class Complex {
  real: number;
  imag: number;
  constructor(cmplx: Complex);
  constructor(real: number, imag: number);
  constructor(realOrCmplx: Complex | number, imag?: number) {
    if (realOrCmplx instanceof Complex) {
      this.real = realOrCmplx.real;
      this.imag = realOrCmplx.imag;
    } else {
      this.real = realOrCmplx;
      this.imag = imag;
    }
  }
}
