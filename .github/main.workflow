workflow "Test" {
  on = "push"
  resolves = ["Run test"]
}

action "Run test" {
  uses = "axetroy/deno-action@0.15.0"
  args = "run test.ts"
}