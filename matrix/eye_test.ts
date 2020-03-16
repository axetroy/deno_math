// Copyright 2018-2019 the Deno authors. All rights reserved. MIT license.
import {
  assertEquals
} from "https://deno.land/std@v0.36.0/testing/asserts.ts";
import { eye } from "./eye.ts";

const { test } = Deno;

test({
  name: "[matrix] eye basic",
  fn(): void {
    const m1 = eye({ row: 1, col: 1 });
    assertEquals(m1.matrix, [
      // prettier-ignore
      [1]
    ]);

    const m2 = eye({ row: 2, col: 2 });
    assertEquals(m2.matrix, [
      // prettier-ignore
      [1, 0],
      [0, 1]
    ]);

    const m3 = eye({ row: 3, col: 3 });
    assertEquals(m3.matrix, [
      // prettier-ignore
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1]
    ]);

    const m4 = eye({ row: 4, col: 4 });
    assertEquals(m4.matrix, [
      // prettier-ignore
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1]
    ]);
  }
});

test({
  name: "[matrix] eye row and col not the same",
  fn(): void {
    const m1 = eye({ row: 1, col: 2 });
    assertEquals(m1.matrix, [
      // prettier-ignore
      [1, 0]
    ]);

    const m2 = eye({ row: 2, col: 3 });
    assertEquals(m2.matrix, [
      // prettier-ignore
      [1, 0, 0],
      [0, 1, 0]
    ]);

    const m3 = eye({ row: 3, col: 4 });
    assertEquals(m3.matrix, [
      // prettier-ignore
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0]
    ]);

    const m4 = eye({ row: 4, col: 5 });
    assertEquals(m4.matrix, [
      // prettier-ignore
      [1, 0, 0, 0, 0],
      [0, 1, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 1, 0]
    ]);
  }
});

test({
  name: "[matrix] eye with k = 1",
  fn(): void {
    const m1 = eye({ row: 1, col: 2, k: 1 });
    assertEquals(m1.matrix, [
      // prettier-ignore
      [0, 1]
    ]);

    const m2 = eye({ row: 2, col: 3, k: 1 });
    assertEquals(m2.matrix, [
      // prettier-ignore
      [0, 1, 0],
      [0, 0, 1]
    ]);

    const m3 = eye({ row: 3, col: 4, k: 1 });
    assertEquals(m3.matrix, [
      // prettier-ignore
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1]
    ]);

    const m4 = eye({ row: 4, col: 5, k: 1 });
    assertEquals(m4.matrix, [
      // prettier-ignore
      [0, 1, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 1, 0],
      [0, 0, 0, 0, 1]
    ]);
  }
});

test({
  name: "[matrix] eye with k = -1",
  fn(): void {
    const m1 = eye({ row: 1, col: 2, k: -1 });
    assertEquals(m1.matrix, [
      // prettier-ignore
      [0, 0]
    ]);

    const m2 = eye({ row: 2, col: 3, k: -1 });
    assertEquals(m2.matrix, [
      // prettier-ignore
      [0, 0, 0],
      [1, 0, 0]
    ]);

    const m3 = eye({ row: 3, col: 4, k: -1 });
    assertEquals(m3.matrix, [
      // prettier-ignore
      [0, 0, 0, 0],
      [1, 0, 0, 0],
      [0, 1, 0, 0]
    ]);

    const m4 = eye({ row: 4, col: 5, k: -1 });
    assertEquals(m4.matrix, [
      // prettier-ignore
      [0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [0, 1, 0, 0, 0],
      [0, 0, 1, 0, 0]
    ]);
  }
});
