import type { Component, ComponentProps } from "solid-js";
import { splitProps } from "solid-js";

import { cn } from "../utils";

const Label: Component<ComponentProps<"label">> = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return (
		// biome-ignore lint/a11y/noLabelWithoutControl: <explanation>
		<label
			class={cn(
				"stt-text-sm stt-font-medium stt-leading-none peer-disabled:stt-cursor-not-allowed peer-disabled:stt-opacity-70",
				local.class,
			)}
			{...others}
		/>
	);
};

export { Label };
