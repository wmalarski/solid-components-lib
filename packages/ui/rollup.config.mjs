import autoprefixer from "autoprefixer";
import postcss from "rollup-plugin-postcss";
import withSolid from "rollup-preset-solid";
import tailwindcss from "tailwindcss";

export default withSolid([
	{
		// external: [/\.css$/],
		plugins: [
			// postcss({
			// 	plugins: [
			// 		autoprefixer(),
			// 		tailwindcss({
			// 			content: ["./src/**/*.tsx"],
			// 		}),
			// 	],
			// 	extract: false,
			// 	modules: false,
			// 	autoModules: false,
			// 	minimize: true,
			// 	inject: false,
			// }),
		],
	},
	{
		input: "src/styles.css",
		output: { file: "dist/styles.css" },
		plugins: [
			postcss({
				plugins: [autoprefixer(), tailwindcss()],
				extract: true,
				minimize: true,
			}),
		],
	},
]);
