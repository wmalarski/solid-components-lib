import sharedConfig from "@stt-design-system/tailwind-config";
import type { Config } from "tailwindcss";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
	content: ["./src/**/*.{ts,tsx}"],
	presets: [sharedConfig],
	prefix: "stt-",
};

export default config;
