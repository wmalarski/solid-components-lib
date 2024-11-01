import type { Component, ValidComponent } from "solid-js";
import { splitProps } from "solid-js";

import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import * as PopoverPrimitive from "@kobalte/core/popover";

import { cn } from "../utils";

const PopoverTrigger = PopoverPrimitive.Trigger;

const Popover: Component<PopoverPrimitive.PopoverRootProps> = (props) => {
	return <PopoverPrimitive.Root gutter={4} {...props} />;
};

type PopoverContentProps<T extends ValidComponent = "div"> =
	PopoverPrimitive.PopoverContentProps<T> & { class?: string | undefined };

const PopoverContent = <T extends ValidComponent = "div">(
	props: PolymorphicProps<T, PopoverContentProps<T>>,
) => {
	const [local, others] = splitProps(props as PopoverContentProps, ["class"]);
	return (
		<PopoverPrimitive.Portal>
			<PopoverPrimitive.Content
				class={cn(
					"stt-z-50 stt-w-72 stt-origin-[var(--kb-popover-content-transform-origin)] stt-rounded-md stt-border stt-bg-popover stt-p-4 stt-text-popover-foreground stt-shadow-md stt-outline-none data-[expanded]:stt-animate-in data-[closed]:stt-animate-out data-[closed]:stt-fade-out-0 data-[expanded]:stt-fade-in-0 data-[closed]:stt-zoom-out-95 data-[expanded]:stt-zoom-in-95",
					local.class,
				)}
				{...others}
			/>
		</PopoverPrimitive.Portal>
	);
};

export { Popover, PopoverContent, PopoverTrigger };
