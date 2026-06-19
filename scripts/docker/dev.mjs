import { spawn } from "node:child_process";
import { existsSync } from "node:fs";

const PORT = process.env.EVE_DOCKER_PORT ?? "44513";
const HOST = process.env.EVE_DOCKER_HOST ?? "0.0.0.0";
const AGENT_FILTER = process.env.EVE_DOCKER_AGENT ?? "weather-agent";

function run(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      stdio: "inherit",
      env: process.env,
      ...options,
    });

    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(new Error(`${command} ${args.join(" ")} exited with code ${code ?? 1}`));
    });
    child.on("error", reject);
  });
}

function runDevServer() {
  return new Promise((resolve) => {
    const child = spawn(
      "pnpm",
      ["--filter", AGENT_FILTER, "run", "dev", "--no-ui", "--host", HOST, "--port", PORT],
      {
        stdio: "inherit",
        env: {
          ...process.env,
          EVE_DOCKER_DEV: "1",
          PORT,
        },
      },
    );

    const shutdown = (signal) => {
      if (child.exitCode !== null) {
        return;
      }

      child.kill(signal);
    };

    process.on("SIGINT", () => shutdown("SIGINT"));
    process.on("SIGTERM", () => shutdown("SIGTERM"));

    child.on("exit", (code) => {
      resolve(code ?? 0);
    });
    child.on("error", (error) => {
      console.error(`[eve:docker] ${error.message}`);
      resolve(1);
    });
  });
}

async function main() {
  console.log("");
  console.log("eve docker dev");
  console.log(`  agent:  ${AGENT_FILTER}`);
  console.log(`  listen: ${HOST}:${PORT}`);
  console.log(`  open:   http://localhost:${PORT}`);
  console.log("");
  console.log("Tip: eve must run from an agent root (for example apps/fixtures/weather-agent).");
  console.log("Custom agents outside the pnpm workspace cannot resolve the local eve package.");
  console.log("See docs/guides/docker.md for details.");
  console.log("");

  if (!existsSync("node_modules")) {
    console.log("[eve:docker] Installing dependencies...");
    await run("pnpm", ["install"]);
  }

  console.log("[eve:docker] Building eve...");
  await run("pnpm", ["--filter", "eve", "build"]);

  const exitCode = await runDevServer();
  process.exit(exitCode);
}

main().catch((error) => {
  console.error(`[eve:docker] ${error.message}`);
  process.exit(1);
});
