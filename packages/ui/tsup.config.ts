import { defineConfig } from "tsup";

export default defineConfig((options) => ({
	entryPoints: [
		"src/components/button.tsx",
		"src/components/dialog.tsx",
		"src/styles.css",
		"src/utils.ts",
	],
	format: ["cjs", "esm"],
	dts: true,
	sourcemap: true,
	external: ["solid-js"],
	treeshake: true,
	splitting: true,
	minify: true,
	clean: true,
	...options,
}));
