import { dirname, join } from "node:path";
import type { StorybookConfig } from "storybook-solidjs-vite";

function getAbsolutePath(value) {
	return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		getAbsolutePath("@storybook/addon-links"),
		getAbsolutePath("@storybook/addon-essentials"),
		getAbsolutePath("@storybook/addon-interactions"),
	],
	framework: {
		// biome-ignore lint/suspicious/noExplicitAny: to make typescript happy
		name: getAbsolutePath("storybook-solidjs-vite") as any,
		options: {},
	},
};
export default config;
