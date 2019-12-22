// Copyright 2018-2019 the Deno authors. All rights reserved. MIT license.
import { runIfMain } from "https://deno.land/std@v0.27.0/testing/mod.ts";

import "./big/test.ts";
import "./matrix/test.ts";
import "./min_test.ts";
import "./max_test.ts";
import "./sum_test.ts";

runIfMain(import.meta);
