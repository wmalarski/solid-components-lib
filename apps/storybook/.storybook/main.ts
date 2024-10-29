import { dirname, join } from "node:path";
import type { StorybookConfig } from "storybook-solidjs-vite";
/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
	return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		getAbsolutePath("@storybook/addon-links"),
		getAbsolutePath("@storybook/addon-essentials"),
		getAbsolutePath("@chromatic-com/storybook"),
		getAbsolutePath("@storybook/addon-interactions"),
	],
	framework: {
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		name: getAbsolutePath("storybook-solidjs-vite") as any,
		options: {},
	},
};
export default config;
