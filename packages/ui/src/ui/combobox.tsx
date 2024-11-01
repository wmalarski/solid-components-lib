import type { JSX, ValidComponent } from "solid-js";
import { splitProps } from "solid-js";

import * as ComboboxPrimitive from "@kobalte/core/combobox";
import type { PolymorphicProps } from "@kobalte/core/polymorphic";

import { cn } from "../utils";

const Combobox = ComboboxPrimitive.Root;
const ComboboxItemLabel = ComboboxPrimitive.ItemLabel;
const ComboboxHiddenSelect = ComboboxPrimitive.HiddenSelect;

type ComboboxItemProps<T extends ValidComponent = "li"> =
	ComboboxPrimitive.ComboboxItemProps<T> & {
		class?: string | undefined;
	};

const ComboboxItem = <T extends ValidComponent = "li">(
	props: PolymorphicProps<T, ComboboxItemProps<T>>,
) => {
	const [local, others] = splitProps(props as ComboboxItemProps, ["class"]);
	return (
		<ComboboxPrimitive.Item
			class={cn(
				"stt-relative stt-flex stt-cursor-default stt-select-none stt-items-center stt-justify-between stt-rounded-sm stt-px-2 stt-py-1.5 stt-text-sm stt-outline-none data-[disabled]:stt-pointer-events-none data-[highlighted]:stt-bg-accent data-[highlighted]:stt-text-accent-foreground data-[disabled]:stt-opacity-50",
				local.class,
			)}
			{...others}
		/>
	);
};

type ComboboxItemIndicatorProps<T extends ValidComponent = "div"> =
	ComboboxPrimitive.ComboboxItemIndicatorProps<T> & {
		children?: JSX.Element;
	};

const ComboboxItemIndicator = <T extends ValidComponent = "div">(
	props: PolymorphicProps<T, ComboboxItemIndicatorProps<T>>,
) => {
	const [local, others] = splitProps(props as ComboboxItemIndicatorProps, [
		"children",
	]);
	return (
		<ComboboxPrimitive.ItemIndicator {...others}>
			{local.children ?? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="stt-size-4"
				>
					<title>Indicator</title>
					<path d="M5 12l5 5l10 -10" />
				</svg>
			)}
		</ComboboxPrimitive.ItemIndicator>
	);
};

type ComboboxSectionProps<T extends ValidComponent = "li"> =
	ComboboxPrimitive.ComboboxSectionProps<T> & { class?: string | undefined };

const ComboboxSection = <T extends ValidComponent = "li">(
	props: PolymorphicProps<T, ComboboxSectionProps<T>>,
) => {
	const [local, others] = splitProps(props as ComboboxSectionProps, ["class"]);
	return (
		<ComboboxPrimitive.Section
			class={cn(
				"stt-overflow-hidden stt-p-1 stt-px-2 stt-py-1.5 stt-text-xs stt-font-medium stt-text-muted-foreground stt-",
				local.class,
			)}
			{...others}
		/>
	);
};

type ComboboxControlProps<
	U,
	T extends ValidComponent = "div",
> = ComboboxPrimitive.ComboboxControlProps<U, T> & {
	class?: string | undefined;
};

const ComboboxControl = <T, U extends ValidComponent = "div">(
	props: PolymorphicProps<U, ComboboxControlProps<T>>,
) => {
	const [local, others] = splitProps(props as ComboboxControlProps<T>, [
		"class",
	]);
	return (
		<ComboboxPrimitive.Control
			class={cn(
				"stt-flex stt-items-center stt-rounded-md stt-border stt-px-3",
				local.class,
			)}
			{...others}
		/>
	);
};

type ComboboxInputProps<T extends ValidComponent = "input"> =
	ComboboxPrimitive.ComboboxInputProps<T> & { class?: string | undefined };

const ComboboxInput = <T extends ValidComponent = "input">(
	props: PolymorphicProps<T, ComboboxInputProps<T>>,
) => {
	const [local, others] = splitProps(props as ComboboxInputProps, ["class"]);
	return (
		<ComboboxPrimitive.Input
			class={cn(
				"stt-flex stt-h-10 stt-w-full stt-rounded-md stt-bg-transparent stt-py-3 stt-text-sm stt-outline-none placeholder:stt-text-muted-foreground disabled:stt-cursor-not-allowed disabled:stt-opacity-50",
				local.class,
			)}
			{...others}
		/>
	);
};

type ComboboxTriggerProps<T extends ValidComponent = "button"> =
	ComboboxPrimitive.ComboboxTriggerProps<T> & {
		class?: string | undefined;
		children?: JSX.Element;
	};

const ComboboxTrigger = <T extends ValidComponent = "button">(
	props: PolymorphicProps<T, ComboboxTriggerProps<T>>,
) => {
	const [local, others] = splitProps(props as ComboboxTriggerProps, [
		"class",
		"children",
	]);
	return (
		<ComboboxPrimitive.Trigger
			class={cn("stt-size-4 stt-opacity-50", local.class)}
			{...others}
		>
			<ComboboxPrimitive.Icon>
				{local.children ?? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="stt-size-4"
					>
						<title>Close</title>
						<path d="M8 9l4 -4l4 4" />
						<path d="M16 15l-4 4l-4 -4" />
					</svg>
				)}
			</ComboboxPrimitive.Icon>
		</ComboboxPrimitive.Trigger>
	);
};

type ComboboxContentProps<T extends ValidComponent = "div"> =
	ComboboxPrimitive.ComboboxContentProps<T> & { class?: string | undefined };

const ComboboxContent = <T extends ValidComponent = "div">(
	props: PolymorphicProps<T, ComboboxContentProps<T>>,
) => {
	const [local, others] = splitProps(props as ComboboxContentProps, ["class"]);
	return (
		<ComboboxPrimitive.Portal>
			<ComboboxPrimitive.Content
				class={cn(
					"stt-relative stt-z-50 stt-min-w-32 stt-overflow-hidden stt-rounded-md stt-border stt-bg-popover stt-text-popover-foreground stt-shadow-md stt-animate-in stt-fade-in-80",
					local.class,
				)}
				{...others}
			>
				<ComboboxPrimitive.Listbox class="stt-m-0 stt-p-1" />
			</ComboboxPrimitive.Content>
		</ComboboxPrimitive.Portal>
	);
};

export {
	Combobox,
	ComboboxContent,
	ComboboxControl,
	ComboboxHiddenSelect,
	ComboboxInput,
	ComboboxItem,
	ComboboxItemIndicator,
	ComboboxItemLabel,
	ComboboxSection,
	ComboboxTrigger,
};
