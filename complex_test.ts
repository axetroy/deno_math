import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { test } from "https://deno.land/std/testing/mod.ts";
import { Complex } from "./complex.ts";

test(function complexOutput() {
  assertEquals(new Complex().toString(), "0+0im");
  assertEquals(new Complex(1, 0).toString(), "1+0im");
  assertEquals(new Complex(1, -0).toString(), "1+0im");
  assertEquals(new Complex(1, -10).toString(), "1-10im");
});

test(function arithmetic() {
  const one = function() {
    return new Complex(1);
  };
  const one_im = function() {
    return new Complex(0, 1);
  };

  // add & subtract
  assertEquals(one().add(one_im()), new Complex(1, 1));
  assertEquals(one().subtract(one_im()), new Complex(1, -1));
});
