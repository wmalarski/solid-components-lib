import solid from "vite-plugin-solid";
import { coverageConfigDefaults, defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [solid()],
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./tests/setup.ts",
		coverage: {
			exclude: ["*.config.*", ...coverageConfigDefaults.exclude],
		},
	},
});
