import type { JSX, ValidComponent } from "solid-js";
import { splitProps } from "solid-js";

import * as AccordionPrimitive from "@kobalte/core/accordion";
import type { PolymorphicProps } from "@kobalte/core/polymorphic";

import { cn } from "../utils";

const Accordion = AccordionPrimitive.Root;

type AccordionItemProps<T extends ValidComponent = "div"> =
	AccordionPrimitive.AccordionItemProps<T> & {
		class?: string | undefined;
	};

const AccordionItem = <T extends ValidComponent = "div">(
	props: PolymorphicProps<T, AccordionItemProps<T>>,
) => {
	const [local, others] = splitProps(props as AccordionItemProps, ["class"]);
	return (
		<AccordionPrimitive.Item
			class={cn("stt-border-b", local.class)}
			{...others}
		/>
	);
};

type AccordionTriggerProps<T extends ValidComponent = "button"> =
	AccordionPrimitive.AccordionTriggerProps<T> & {
		class?: string | undefined;
		children?: JSX.Element;
	};

const AccordionTrigger = <T extends ValidComponent = "button">(
	props: PolymorphicProps<T, AccordionTriggerProps<T>>,
) => {
	const [local, others] = splitProps(props as AccordionTriggerProps, [
		"class",
		"children",
	]);
	return (
		<AccordionPrimitive.Header class="stt-flex">
			<AccordionPrimitive.Trigger
				class={cn(
					"stt-flex stt-flex-1 stt-items-center stt-justify-between stt-py-4 stt-font-medium stt-transition-all hover:stt-underline [&[data-expanded]>svg]:stt-rotate-180",
					local.class,
				)}
				{...others}
			>
				{local.children}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="stt-size-4 stt-shrink-0 stt-transition-transform stt-duration-200"
				>
					<title>Chevron</title>
					<path d="M6 9l6 6l6 -6" />
				</svg>
			</AccordionPrimitive.Trigger>
		</AccordionPrimitive.Header>
	);
};

type AccordionContentProps<T extends ValidComponent = "div"> =
	AccordionPrimitive.AccordionContentProps<T> & {
		class?: string | undefined;
		children?: JSX.Element;
	};

const AccordionContent = <T extends ValidComponent = "div">(
	props: PolymorphicProps<T, AccordionContentProps<T>>,
) => {
	const [local, others] = splitProps(props as AccordionContentProps, [
		"class",
		"children",
	]);
	return (
		<AccordionPrimitive.Content
			class={cn(
				"stt-animate-accordion-up stt-overflow-hidden stt-text-sm stt-transition-all data-[expanded]:stt-animate-accordion-down",
				local.class,
			)}
			{...others}
		>
			<div class="stt-pb-4 stt-pt-0">{local.children}</div>
		</AccordionPrimitive.Content>
	);
};

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
