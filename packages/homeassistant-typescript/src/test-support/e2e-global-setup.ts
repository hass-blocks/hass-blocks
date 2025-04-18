import { exec } from "node:child_process";
import { promisify } from "node:util";
import { getPackageName } from "./get-package-name.ts";
import { v2 as compose } from "docker-compose";
import path from "node:path";
import { delay } from "./delay.ts";

export const setup = async () => {
  if (process.env.POST_RELEASE === "true") {
    const packageName = getPackageName();
    console.log(`Installing ${packageName}`);
    const execCommand = promisify(exec);
    await execCommand(`pnpm install npm:${packageName}@latest`);
  }

  console.log(" ℹ️  Starting test HASS server...");

  await compose.upAll({
    cwd: path.join(__dirname),
    commandOptions: ["--build"],
    callback: (chunk) => {
      console.log(`Job in progress: `, chunk.toString());
    },
  });

  void compose.logs("homeassistant", {
    follow: true,
    callback: (chunk) => {
      console.log(chunk.toString());
    },
  });

  await delay(5000);
};

export const teardown = async () => {
  console.log(" ℹ️  Stopping test HASS server...");
  await compose.down({
    cwd: path.join(__dirname),
  });
};
