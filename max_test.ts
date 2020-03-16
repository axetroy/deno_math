// Copyright 2018-2019 the Deno authors. All rights reserved. MIT license.
import {
  assertEquals,
  assertThrows
} from "https://deno.land/std@v0.36.0/testing/asserts.ts";
import { max } from "./max.ts";

const { test } = Deno;

test({
  name: "[math] max",
  fn(): void {
    assertEquals(max([-1, 0, 1, 2, 3, 4]), "4");
    assertEquals(max(["-2", -1, "0", 1, 2]), "2");

    assertEquals(max(["-2", -12, "0", 1, 2]), "2");
    // assertEquals(max([1000, 100, 10n]), "1000");

    assertThrows((): void => {
      max(["1", "abc"]);
    }, Error);

    assertThrows(
      (): void => {
        max([]);
      },
      Error,
      "Max-array can not be empty."
    );
  }
});
