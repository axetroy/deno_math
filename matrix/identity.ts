// Copyright 2018-2019 the Deno authors. All rights reserved. MIT license.

import { Matrix } from "./matrix.ts";

/**
 * Generating a diagonal matrix
 * @param num
 */
export function identity(num: number): Matrix {
  const rows = [];
  for (let x = 0; x < num; x++) {
    const row = new Array(num).fill(0);
    row[x] = 1;
    rows.push(row);
  }
  return new Matrix(rows);
}
