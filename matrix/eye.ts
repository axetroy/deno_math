// Copyright 2018-2019 the Deno authors. All rights reserved. MIT license.

import { Matrix } from "./matrix.ts";

export interface MatrixProperty {
  row: number;
  col: number;
  k?: number;
}

/**
 * Generating a diagonal matrix
 * @param num
 */
export function eye(property: MatrixProperty): Matrix {
  const rows = [];
  for (let x = 0; x < property.row; x++) {
    const row = new Array(property.col).fill(0);
    const fillIndex = x + (property.k || 0);
    if (fillIndex in row) {
      row[fillIndex] = 1;
    }
    rows.push(row);
  }
  return new Matrix(rows);
}
