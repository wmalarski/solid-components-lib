import type { Component, ComponentProps } from "solid-js";
import { splitProps } from "solid-js";

import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

import { cn } from "../utils";

const badgeVariants = cva(
	"stt-inline-flex stt-items-center stt-border stt-px-2.5 stt-py-0.5 stt-text-xs stt-font-semibold stt-transition-colors focus:stt-outline-none focus:stt-ring-2 focus:stt-ring-ring focus:stt-ring-offset-2",
	{
		variants: {
			variant: {
				default:
					"stt-border-transparent stt-bg-primary stt-text-primary-foreground hover:stt-bg-primary/80",
				secondary:
					"stt-border-transparent stt-bg-secondary stt-text-secondary-foreground hover:stt-bg-secondary/80",
				destructive:
					"stt-border-transparent stt-bg-destructive stt-text-destructive-foreground hover:stt-bg-destructive/80",
				outline: "stt-text-foreground",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

type BadgeProps = ComponentProps<"div"> &
	VariantProps<typeof badgeVariants> & {
		round?: boolean;
	};

const Badge: Component<BadgeProps> = (props) => {
	const [local, others] = splitProps(props, ["class", "variant", "round"]);
	return (
		<div
			class={cn(
				badgeVariants({ variant: local.variant }),
				local.round ? "stt-rounded-full" : "stt-rounded-md",
				local.class,
			)}
			{...others}
		/>
	);
};

export { Badge, badgeVariants };
export type { BadgeProps };
