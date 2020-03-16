// Copyright 2018-2019 the Deno authors. All rights reserved. MIT license.
import {
  assertEquals,
  assertThrows
} from "https://deno.land/std@v0.36.0/testing/asserts.ts";
import { min } from "./min.ts";

const { test } = Deno;

test({
  name: "[math] min",
  fn(): void {
    assertEquals(min([-1, 0, 1, 2, 3, 4]), "-1");
    assertEquals(min(["-2", -1, "0", 1, 2]), "-2");

    assertEquals(min(["-2", -12, "0", 1, 2]), "-12");
    // assertEquals(min([1000, 100, 10n]), "10");

    assertThrows((): void => {
      min(["1", "abc"]);
    }, Error);

    assertThrows(
      (): void => {
        min([]);
      },
      Error,
      "Min-array can not be empty."
    );
  }
});
