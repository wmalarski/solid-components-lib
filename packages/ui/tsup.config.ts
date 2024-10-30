import { defineConfig } from "tsup";
import * as preset from "tsup-preset-solid";

const presetOptions: preset.PresetOptions = {
	// array or single object
	entries: [
		{
			entry: "src/index.tsx",
		},
		{
			entry: "src/styles.css",
		},
	],

	// Set to `true` to remove all `console.*` calls and `debugger` statements in prod builds
	drop_console: true,
	// Set to `true` to generate a CommonJS build alongside ESM
	cjs: false,
	modify_esbuild_options: (options) => {
		// console.log("options.entryPoints", options);

		// options.entryPoints["styles"] = "src/styles.css";
		return options;
	},
	esbuild_plugins: [],
};

export default defineConfig((config) => {
	const watching = !!config.watch;

	const parsedData = preset.parsePresetOptions(presetOptions, watching);

	if (!watching) {
		const packageFields = preset.generatePackageExports(parsedData);

		console.log(
			`\npackage.json: \n${JSON.stringify(packageFields, null, 2)}\n\n`,
		);

		/*
		will update ./package.json with the correct export fields
		*/
		preset.writePackageJson(packageFields);
	}

	const options = preset.generateTsupOptions(parsedData);

	console.log(JSON.stringify(options, null, 2));

	return options;
});

// import { defineConfig } from "tsup";

// export default defineConfig((options) => ({
// 	entryPoints: ["src/index.tsx", "src/styles.css"],
// 	format: ["cjs", "esm"],
// 	dts: true,
// 	sourcemap: true,
// 	// external: ["solid-js"],
// 	// jsxFactory: "solid-js",
// 	treeshake: true,
// 	splitting: true,
// 	// minify: true,
// 	clean: true,
// 	...options,
// }));
