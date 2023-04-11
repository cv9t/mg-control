import { build, Plugin } from "esbuild";
import { rm } from "fs/promises";
import * as path from "path";

const resolveRoot = (...segments: string[]): string => path.resolve(__dirname, ...segments);

const clean: Plugin = {
  name: "Clean",
  // eslint-disable-next-line @typescript-eslint/no-shadow
  setup: (build) => {
    build.onStart(async () => {
      try {
        const { outdir } = build.initialOptions;
        if (outdir) {
          await rm(outdir, { recursive: true });
        }
      } catch (err) {
        if (err instanceof Error) {
          console.log(err.message);
        }
      }
    });
  },
};

build({
  platform: "node",
  entryPoints: [resolveRoot("src/server.ts")],
  outdir: resolveRoot("dist"),
  bundle: true,
  minify: true,
  tsconfig: path.join(__dirname, "tsconfig.json"),
  plugins: [clean],
  alias: {
    "@": "./src",
  },
});