// Copyright 2018-2019 the Deno authors. All rights reserved. MIT license.
import {
  assertEquals
} from "https://deno.land/std@v0.36.0/testing/asserts.ts";
import { identity } from "./identity.ts";

const { test } = Deno;

test({
  name: "[matrix] identity",
  fn(): void {
    const m1 = identity(1);
    assertEquals(m1.matrix, [
      // prettier-ignore
      [1]
    ]);

    const m2 = identity(2);
    assertEquals(m2.matrix, [
      // prettier-ignore
      [1, 0],
      [0, 1]
    ]);

    const m3 = identity(3);
    assertEquals(m3.matrix, [
      // prettier-ignore
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1]
    ]);

    const m4 = identity(4);
    assertEquals(m4.matrix, [
      // prettier-ignore
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1]
    ]);
  }
});
