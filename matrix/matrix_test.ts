// Copyright 2018-2019 the Deno authors. All rights reserved. MIT license.
import {
  assertEquals,
  assertThrows
} from "https://deno.land/std/testing/asserts.ts";
import { test } from "https://deno.land/std/testing/mod.ts";
import { Matrix } from "./matrix.ts";

test({
  name: "[matrix] invalid matrix",
  fn(): void {
    assertThrows(
      () => {
        new Matrix([
          // prettier-ignore
          [1, 2, 3],
          [1, 2]
        ]);
      },
      Error,
      "Not available matrix."
    );
  }
});

test({
  name: "[matrix] times",
  fn(): void {
    const result = new Matrix(
      // prettier-ignore
      [
        [1, 2, 3],
        [4, 5, 6]
      ]
    ).times(
      new Matrix(
        // prettier-ignore
        [
          [7, 8],
          [9, 10],
          [11, 12]
        ]
      )
    );

    assertEquals(result.matrix, [
      // prettier-ignore
      [58, 64],
      [139, 154]
    ]);

    assertEquals(
      new Matrix(
        // prettier-ignore
        [
          [1, 2, 3],
          [4, 5, 6]
        ]
      ).times(2).matrix,
      // prettier-ignore
      [
        [2, 4, 6],
        [8, 10, 12]
      ]
    );
  }
});

test({
  name: "[matrix] div",
  fn(): void {
    const result = new Matrix(
      // prettier-ignore
      [
        [1, 2, 3],
        [4, 5, 6]
      ]
    ).div(
      new Matrix(
        // prettier-ignore
        [
          [7, 8],
          [9, 10],
          [11, 12]
        ]
      )
    );

    assertEquals(result.matrix, [
      // prettier-ignore
      [0.6378066378066378, 0.575],
      [1.6724386724386724, 1.5]
    ]);

    assertEquals(
      new Matrix(
        // prettier-ignore
        [
          [1, 2, 3],
          [4, 5, 6]
        ]
      ).div(2).matrix,
      // prettier-ignore
      [
        [0.5, 1, 1.5],
        [2, 2.5, 3]
      ]
    );
  }
});

test({
  name: "[matrix] plus",
  fn(): void {
    assertEquals(
      new Matrix(
        // prettier-ignore
        [
          [1, 2, 3],
          [4, 5, 6]
        ]
      ).plus(
        new Matrix(
          // prettier-ignore
          [
            [7, 8, 9],
            [10, 11, 12]
          ]
        )
      ).matrix,
      [
        // prettier-ignore
        [8, 10, 12],
        [14, 16, 18]
      ]
    );
  }
});
