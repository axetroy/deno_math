[![Build Status](https://github.com/axetroy/deno_math/workflows/ci/badge.svg?branch=master)](https://github.com/axetroy/deno_math/actions)

# math

The math module is used to provide a helper for high-precision calculations and scientific computing.

## Usage

All the following modules are exposed in `mod.ts`

## Big

A class for high-precision calculations.

```ts
import { Big } from "https://deno.land/x/math@v1.1.0/mod.ts";

new Big(0.1).plus(0.2).toString(); // '0.3'
```

[Documentation](big/README.md)

## Matrix

A class for `Matrix` computing.

```ts
import { Matrix } from "https://deno.land/x/math@v1.1.0/mod.ts";

const m = new Matrix([
  [1, 2, 3],
  [4, 5, 6]
]).transpose();

console.log(m.toString());
/**
1, 4
2, 5
3, 6
*/
```

[Documentation](matrix/README.md)

### abs

get a numeric absolute value.

```ts
import { abs } from "https://deno.land/x/math@v1.1.0/mod.ts";

abs(-1); // '1'
abs("-0.1"); // '0.1'
```

### min

get a smaller numeric from a numeric set. Similar to `Math.min`.

```ts
import { min } from "https://deno.land/x/math@v1.1.0/mod.ts";

min([-1, 0, "1"]); // '-1'
```

### max

get a larger numeric from a numeric set. Similar to `Math.max`.

```ts
import { max } from "https://deno.land/x/math@v1.1.0/mod.ts";

max([-1, 0, "1"]); // '1'
```

### sum

get the sum of a numeric set.

```ts
import { sum } from "https://deno.land/x/math@v1.1.0/mod.ts";

sum([1, "2", 3]); // '6'
```

### plus

get the value of `a numeric` plus `another numeric`. Similar to Javascript `+` operator.

```ts
import { plus } from "https://deno.land/x/math@v1.1.0/mod.ts";

plus("1", 2); // '3'
```

### minus

get the value of `a numeric` minus `another numeric`. Similar to Javascript `-` operator.

```ts
import { minus } from "https://deno.land/x/math@v1.1.0/mod.ts";

minus("1", 2); // '-1'
```

### times

get the value of `a numeric` times `another numeric`. Similar to Javascript `*` operator.

```ts
import { times } from "https://deno.land/x/math@v1.1.0/mod.ts";

times("1", 2); // '2'
```

### div

get the value of `a numeric` divided `another numeric`. Similar to Javascript `/` operator.

```ts
import { div } from "https://deno.land/x/math@v1.1.0/mod.ts";

div("1", 2); // '0.5'
```

### mod

get the value of `a numeric` modulo `another numeric`. Similar to Javascript `%` operator.

```ts
import { mod } from "https://deno.land/x/math@v1.1.0/mod.ts";

mod("3", 2); // '1'
```

### pow

get the value of `a numeric` raised to the power `another numeric`. Similar to `Math.pow`.

```ts
import { pow } from "https://deno.land/x/math@v1.1.0/mod.ts";

pow("3", 2); // '9'
```

### sqrt

get the value is the square root of `a numeric`. Similar to `Math.sqrt`.

```ts
import { sqrt } from "https://deno.land/x/math@v1.1.0/mod.ts";

sqrt("3", 2); // '1.7320508075688772'
```

### round

get the value of input rounded using rounding mode `rm` to a maximum of `dp` decimal places. Similar to `Math.round`.

```ts
import { round } from "https://deno.land/x/math@v1.1.0/mod.ts";

round("3.456", 2); // '3.46'
```

### toExponential

get an exponential notation string from `a numeric`. Similar to `Number.prototype.toExponential`.

```ts
import { toExponential } from "https://deno.land/x/math@v1.1.0/mod.ts";

toExponential("3.456", 2); // '3.46e+0'
```

### toFixed

get a normal notation string from `a numeric`. Similar to `Number.prototype.toFixed`.

```ts
import { toFixed } from "https://deno.land/x/math@v1.1.0/mod.ts";

toFixed("3.4", 6); // '3.400000'
```

### toPrecision

get the value of `a numeric` to the specified number of `sd` significant digits. Similar to `Number.prototype.toPrecision`.

```ts
import { toPrecision } from "https://deno.land/x/math@v1.1.0/mod.ts";

toPrecision("3.4567890", 6); // '3.456789'
```

### eq

Where `a numeric` equal to `another numeric`. Similar to Javascript `===` operator.

```ts
import { eq } from "https://deno.land/x/math@v1.1.0/mod.ts";

eq("1.200", "1.2e+0"); // true
```

### gt

Where `a numeric` greater than `another numeric`. Similar to Javascript `>` operator.

```ts
import { gt } from "https://deno.land/x/math@v1.1.0/mod.ts";

gt(2, "1"); // true
```

### gte

Where `a numeric` greater than or equal to `another numeric`. Similar to Javascript `>=` operator.

```ts
import { gte } from "https://deno.land/x/math@v1.1.0/mod.ts";

gte(2, "1"); // true
gte(2, "2"); // true
gte(2, "3"); // false
```

### lt

Where `a numeric` less than `another numeric`. Similar to Javascript `<` operator.

```ts
import { lt } from "https://deno.land/x/math@v1.1.0/mod.ts";

lt(2, "1"); // false
lt(2, "2"); // false
lt(2, "3"); // false
```

### lte

Where `a numeric` less than or equal to `another numeric`. Similar to Javascript `<=` operator.

```ts
import { lte } from "https://deno.land/x/math@v1.1.0/mod.ts";

lte(2, "1"); // false
lte(2, "2"); // true
lte(2, "3"); // false
```
