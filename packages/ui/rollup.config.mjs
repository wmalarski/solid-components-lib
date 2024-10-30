import autoprefixer from "autoprefixer";
import postcss from "rollup-plugin-postcss";
import withSolid from "rollup-preset-solid";
import tailwindcss from "tailwindcss";

export default withSolid([
	{ input: "src/index.tsx", targets: ["esm", "cjs"] },
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
