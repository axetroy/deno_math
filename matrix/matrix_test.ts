// Copyright 2018-2019 the Deno authors. All rights reserved. MIT license.
import {
  assertEquals,
  assertThrows
} from "https://deno.land/std@v0.36.0/testing/asserts.ts";
import { Matrix } from "./matrix.ts";

const { test } = Deno;

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
  name: "[matrix] shape",
  fn(): void {
    const m = new Matrix([
      // prettier-ignore
      [1, 2, 3],
      [4, 5, 6]
    ]);

    assertEquals(m.shape, [2, 3]);

    m.shape = [3, 2];

    assertEquals(m.shape, [3, 2]);
    assertEquals(m.matrix, [
      // prettier-ignore
      [1, 2],
      [3, 4],
      [5, 6]
    ]);

    assertThrows(
      () => {
        m.shape = [4, 4];
      },
      Error,
      "Can not change the shape from (3, 2) to (4, 4)"
    );
  }
});

test({
  name: "[matrix] reshape",
  fn(): void {
    const m = new Matrix([
      // prettier-ignore
      [1, 2, 3],
      [4, 5, 6]
    ]);

    assertEquals(m.shape, [2, 3]);

    assertEquals(m.matrix, [
      // prettier-ignore
      [1, 2, 3],
      [4, 5, 6]
    ]);

    const m2 = m.reshape([3, 2]);

    assertEquals(m2.matrix, [
      // prettier-ignore
      [1, 2],
      [3, 4],
      [5, 6]
    ]);

    assertEquals(m.matrix, [
      // prettier-ignore
      [1, 2, 3],
      [4, 5, 6]
    ]);
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

test({
  name: "[matrix] transpose",
  fn(): void {
    assertEquals(
      new Matrix(
        // prettier-ignore
        [
          [1, 2, 3],
          [4, 5, 6]
        ]
      ).transpose().matrix,
      [
        // prettier-ignore
        [1, 4],
        [2, 5],
        [3, 6]
      ]
    );

    assertEquals(
      new Matrix(
        // prettier-ignore
        [
          [1, 2],
          [3, 4]
        ]
      ).transpose().matrix,
      [
        // prettier-ignore
        [1, 3],
        [2, 4]
      ]
    );

    assertEquals(
      new Matrix(
        // prettier-ignore
        [
          [1, 2],
          [3, 4],
          [5, 6]
        ]
      ).transpose().matrix,
      [
        // prettier-ignore
        [1, 3, 5],
        [2, 4, 6]
      ]
    );

    assertEquals(
      new Matrix(
        // prettier-ignore
        [
          [1, 2],
          [3, 4],
          [5, 6]
        ]
      )
        .transpose()
        .transpose().matrix,
      [
        // prettier-ignore
        [1, 2],
        [3, 4],
        [5, 6]
      ]
    );
  }
});

test({
  name: "[matrix] trace",
  fn(): void {
    assertEquals(
      new Matrix(
        // prettier-ignore
        [
          [1, 2, 3],
          [4, 5, 6]
        ]
      ).trace(),
      6 // 1 + 5
    );
    assertEquals(
      new Matrix(
        // prettier-ignore
        [
          [1, 2, 3],
          [4, 5, 6]
        ]
      ).trace(1),
      8 // 2 + 6
    );
  }
});
