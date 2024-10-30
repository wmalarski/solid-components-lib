import type { JSX, ValidComponent } from "solid-js";
import { splitProps } from "solid-js";

import * as ButtonPrimitive from "@kobalte/core/button";
import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

import { cn } from "../utils";

const buttonVariants = cva(
	"stt-inline-flex stt-items-center stt-justify-center stt-rounded-md stt-text-sm stt-font-medium stt-ring-offset-background stt-transition-colors focus-visible:stt-outline-none focus-visible:stt-ring-2 focus-visible:stt-ring-ring focus-visible:stt-ring-offset-2 disabled:stt-pointer-events-none disabled:stt-opacity-50",
	{
		variants: {
			variant: {
				default:
					"stt-bg-primary stt-text-primary-foreground hover:stt-bg-primary/90",
				destructive:
					"stt-bg-destructive stt-text-destructive-foreground hover:stt-bg-destructive/90",
				outline:
					"stt-border stt-border-input hover:stt-bg-accent hover:stt-text-accent-foreground",
				secondary:
					"stt-bg-secondary stt-text-secondary-foreground hover:stt-bg-secondary/80",
				ghost: "hover:stt-bg-accent hover:stt-text-accent-foreground",
				link: "stt-text-primary stt-underline-offset-4 hover:stt-underline",
			},
			size: {
				default: "stt-h-10 stt-px-4 stt-py-2",
				sm: "stt-h-9 stt-rounded-md stt-px-3",
				lg: "stt-h-11 stt-rounded-md stt-px-8",
				icon: "stt-size-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

type ButtonProps<T extends ValidComponent = "button"> =
	ButtonPrimitive.ButtonRootProps<T> &
		VariantProps<typeof buttonVariants> & {
			class?: string | undefined;
			children?: JSX.Element;
		};

const Button = <T extends ValidComponent = "button">(
	props: PolymorphicProps<T, ButtonProps<T>>,
) => {
	const [local, others] = splitProps(props as ButtonProps, [
		"variant",
		"size",
		"class",
	]);
	return (
		<ButtonPrimitive.Root
			class={cn(
				buttonVariants({ variant: local.variant, size: local.size }),
				local.class,
			)}
			{...others}
		/>
	);
};

export { Button, buttonVariants };
export type { ButtonProps };
