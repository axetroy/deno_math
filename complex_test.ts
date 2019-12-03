import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { test } from "https://deno.land/std/testing/mod.ts";
import { Complex } from "./complex.ts";

test(function complexOutput() {
  assertEquals(new Complex(1, 0).toString(), "1+0im");
  assertEquals(new Complex(1, -0).toString(), "1+0im");
  assertEquals(new Complex(1, -10).toString(), "1-10im");
});
