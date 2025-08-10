import { spawnSync } from "node:child_process";

const hasToken = !!process.env.BASEHUB_TOKEN;

if (!hasToken) {
  console.log("Skipping Basehub CLI: BASEHUB_TOKEN not set.");
  process.exit(0);
}

console.log("Running Basehub CLI before build...");
const cmd = process.platform === "win32" ? "pnpm.cmd" : "pnpm";
const result = spawnSync(cmd, ["exec", "basehub"], {
  stdio: "inherit",
  env: process.env,
});

if (result.status !== 0) {
  console.error("Basehub CLI failed. Exit code:", result.status);
}
process.exit(result.status ?? 0);
