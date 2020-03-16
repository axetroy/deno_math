// Copyright 2018-2019 the Deno authors. All rights reserved. MIT license.

export type IMatrix = number[][];
export type RowNumber = number;
export type ColNumber = number;

export type Shape = [RowNumber, ColNumber];

function ensureMatrixSize(a: Matrix, b: Matrix) {
  const [aRowSize, aColSize] = a.shape;
  const [bRowSize, bColSize] = b.shape;

  if (aRowSize !== bRowSize || aColSize !== bColSize) {
    throw new Error("Matrices must be the same size.");
  }
}

export class Matrix {
  constructor(public matrix: IMatrix) {
    const colLength = (matrix[0] || []).length;
    const isValidcolLength = matrix.every(row => row.length === colLength);
    if (!isValidcolLength) {
      throw new Error("Not available matrix.");
    }
  }
  /**
   * Get the size of Matrix
   */
  public get shape(): Shape {
    const elementSize = this.matrix[0].length;
    const rowSize = this.matrix.length;
    return [rowSize, elementSize];
  }
  private generateNewShape(shape: Shape) {
    const [rowNumber, colNumber] = shape;
    const [originRowNumber, originColNumber] = this.shape;

    if (rowNumber * colNumber !== originRowNumber * originColNumber) {
      throw new Error(
        `Can not change the shape from (${originRowNumber}, ${originColNumber}) to (${rowNumber}, ${colNumber})`
      );
    }

    const output: IMatrix = [];
    const origin = this.matrix.flat();

    for (let i = 0; i < rowNumber; i++) {
      let row: number[] = [];
      while (row.length !== colNumber) {
        row = row.concat(origin.splice(0, colNumber));
      }
      output.push(row);
    }

    return output;
  }
  /**
   * Change the size of Matrix
   */
  public set shape(shape: Shape) {
    this.matrix = this.generateNewShape(shape);
  }
  /**
   * Generate the new size of Matrix
   */
  public reshape(shape: Shape): Matrix {
    return new Matrix(this.generateNewShape(shape));
  }
  /**
   * Multiply the matrix by a number or matrix. similar like `a * b`
   * @param n a number or matrix
   */
  public times(n: number | Matrix) {
    if (n instanceof Matrix) {
      const output = [];
      for (let i = 0; i < this.matrix.length; i++) {
        const row = this.matrix[i];
        const newRow = [];

        const [_, colSize] = n.shape;

        for (let i = 0; i < colSize; i++) {
          const row2 = n.matrix.map(v => v[i]);
          const c = row
            .map((v, index) => v * row2[index])
            .reduce((a, b) => a + b, 0);

          newRow.push(c);
        }

        output.push(newRow);
      }
      return new Matrix(output);
    } else {
      const output = [];
      for (const row of this.matrix) {
        output.push(row.map(v => v * n));
      }
      return new Matrix(output);
    }
  }
  /**
   * Divided the matrix by a number or matrix. similar like `a / b`
   * @param n a number or matrix
   */
  public div(n: number | Matrix) {
    if (n instanceof Matrix) {
      const output = [];
      for (let i = 0; i < this.matrix.length; i++) {
        const row = this.matrix[i];
        const newRow = [];

        const [_, colSize] = n.shape;

        for (let i = 0; i < colSize; i++) {
          const row2 = n.matrix.map(v => v[i]);
          const c = row
            .map((v, index) => v / row2[index])
            .reduce((a, b) => a + b, 0);

          newRow.push(c);
        }

        output.push(newRow);
      }
      return new Matrix(output);
    } else {
      const output = [];
      for (const row of this.matrix) {
        output.push(row.map(v => v / n));
      }
      return new Matrix(output);
    }
  }
  /**
   * Plus matrix. similar like `a + b`
   * @param n a number or matrix
   */
  public plus(n: Matrix) {
    ensureMatrixSize(this, n);
    const output = [];
    for (let i = 0; i < this.matrix.length; i++) {
      const row = this.matrix[i];
      output.push(row.map((v, m) => v + n.matrix[i][m]));
    }
    return new Matrix(output);
  }
  /**
   * Plus matrix. similar like `a - b`
   * @param n a number or matrix
   */
  public minus(n: Matrix) {
    ensureMatrixSize(this, n);
    const output = [];
    for (let i = 0; i < this.matrix.length; i++) {
      const row = this.matrix[i];
      output.push(row.map((v, m) => v - n.matrix[i][m]));
    }
    return new Matrix(output);
  }
  /**
   * Get the trace of the Matrix
   * @param k
   */
  public trace(k: number = 0): number {
    let tack = 0;
    for (let i = 0; i < this.matrix.length; i++) {
      const row = this.matrix[i];
      tack += row[i + k] || 0;
    }
    return tack;
  }
  /**
   * Transpose and return new Matrix
   */
  public transpose(): Matrix {
    const output = [];
    const [_, colSize] = this.shape;

    for (let i = 0; i < colSize; i++) {
      output.push(this.col(i));
    }

    return new Matrix(output);
  }
  /**
   * Get the value of a row
   * @param row
   * @param col
   */
  public row(row: number): number[] {
    return this.matrix[row];
  }
  /**
   * Get the value of a col
   * @param col
   */
  public col(col: number): number[] {
    return this.matrix.map(v => v[col]);
  }
  /**
   * Get a value of a point
   * @param row
   * @param col
   */
  public pointAt(row: number, col: number): number {
    return this.matrix[row][col];
  }
  /**
   * Print to human readable string
   */
  public toString(): string {
    const output = [];
    for (const row of this.matrix) {
      output.push(row.join(", "));
    }
    return output.join("\n");
  }
  public valueOf() {
    return this.matrix;
  }
}
