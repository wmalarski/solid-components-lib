import type { Component, ComponentProps, JSX, ValidComponent } from "solid-js";
import { splitProps } from "solid-js";

import * as NumberFieldPrimitive from "@kobalte/core/number-field";
import type { PolymorphicProps } from "@kobalte/core/polymorphic";

import { cn } from "../utils";

const NumberField = NumberFieldPrimitive.Root;

const NumberFieldGroup: Component<ComponentProps<"div">> = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return (
		<div
			class={cn(
				"stt-relative stt-rounded-md focus-within:stt-ring-2 focus-within:stt-ring-ring focus-within:stt-ring-offset-2",
				local.class,
			)}
			{...others}
		/>
	);
};

type NumberFieldLabelProps<T extends ValidComponent = "label"> =
	NumberFieldPrimitive.NumberFieldLabelProps<T> & {
		class?: string | undefined;
	};

const NumberFieldLabel = <T extends ValidComponent = "label">(
	props: PolymorphicProps<T, NumberFieldLabelProps<T>>,
) => {
	const [local, others] = splitProps(props as NumberFieldLabelProps, ["class"]);
	return (
		<NumberFieldPrimitive.Label
			class={cn(
				"stt-text-sm stt-font-medium stt-leading-none peer-disabled:stt-cursor-not-allowed peer-disabled:stt-opacity-70",
				local.class,
			)}
			{...others}
		/>
	);
};

type NumberFieldInputProps<T extends ValidComponent = "input"> =
	NumberFieldPrimitive.NumberFieldInputProps<T> & {
		class?: string | undefined;
	};

const NumberFieldInput = <T extends ValidComponent = "input">(
	props: PolymorphicProps<T, NumberFieldInputProps<T>>,
) => {
	const [local, others] = splitProps(props as NumberFieldInputProps, ["class"]);
	return (
		<NumberFieldPrimitive.Input
			class={cn(
				"stt-flex stt-h-10 stt-w-full stt-rounded-md stt-border stt-border-input stt-bg-transparent stt-px-3 stt-py-2 stt-text-sm stt-ring-offset-background file:stt-border-0 file:stt-bg-transparent file:stt-text-sm file:stt-font-medium placeholder:stt-text-muted-foreground focus-visible:stt-outline-none disabled:stt-cursor-not-allowed disabled:stt-opacity-50 data-[invalid]:stt-border-error-foreground data-[invalid]:stt-text-error-foreground",
				local.class,
			)}
			{...others}
		/>
	);
};

type NumberFieldIncrementTriggerProps<T extends ValidComponent = "button"> =
	NumberFieldPrimitive.NumberFieldIncrementTriggerProps<T> & {
		class?: string | undefined;
		children?: JSX.Element;
	};

const NumberFieldIncrementTrigger = <T extends ValidComponent = "button">(
	props: PolymorphicProps<T, NumberFieldIncrementTriggerProps<T>>,
) => {
	const [local, others] = splitProps(
		props as NumberFieldIncrementTriggerProps,
		["class", "children"],
	);
	return (
		<NumberFieldPrimitive.IncrementTrigger
			class={cn(
				"stt-absolute stt-right-1 stt-top-1 stt-inline-flex stt-size-4 stt-items-center stt-justify-center",
				local.class,
			)}
			{...others}
		>
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
					<title>Plus</title>
					<path d="M6 15l6 -6l6 6" />
				</svg>
			)}
		</NumberFieldPrimitive.IncrementTrigger>
	);
};

type NumberFieldDecrementTriggerProps<T extends ValidComponent = "button"> =
	NumberFieldPrimitive.NumberFieldDecrementTriggerProps<T> & {
		class?: string | undefined;
		children?: JSX.Element;
	};

const NumberFieldDecrementTrigger = <T extends ValidComponent = "button">(
	props: PolymorphicProps<T, NumberFieldDecrementTriggerProps<T>>,
) => {
	const [local, others] = splitProps(
		props as NumberFieldDecrementTriggerProps,
		["class", "children"],
	);
	return (
		<NumberFieldPrimitive.DecrementTrigger
			class={cn(
				"stt-absolute stt-bottom-1 stt-right-1 stt-inline-flex stt-size-4 stt-items-center stt-justify-center",
				local.class,
			)}
			{...others}
		>
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
					<title>Minus</title>
					<path d="M6 9l6 6l6 -6" />
				</svg>
			)}
		</NumberFieldPrimitive.DecrementTrigger>
	);
};

type NumberFieldDescriptionProps<T extends ValidComponent = "div"> =
	NumberFieldPrimitive.NumberFieldDescriptionProps<T> & {
		class?: string | undefined;
	};

const NumberFieldDescription = <T extends ValidComponent = "div">(
	props: PolymorphicProps<T, NumberFieldDescriptionProps<T>>,
) => {
	const [local, others] = splitProps(props as NumberFieldDescriptionProps, [
		"class",
	]);
	return (
		<NumberFieldPrimitive.Description
			class={cn("stt-text-sm stt-text-muted-foreground", local.class)}
			{...others}
		/>
	);
};

type NumberFieldErrorMessageProps<T extends ValidComponent = "div"> =
	NumberFieldPrimitive.NumberFieldErrorMessageProps<T> & {
		class?: string | undefined;
	};

const NumberFieldErrorMessage = <T extends ValidComponent = "div">(
	props: PolymorphicProps<T, NumberFieldErrorMessageProps<T>>,
) => {
	const [local, others] = splitProps(props as NumberFieldErrorMessageProps, [
		"class",
	]);
	return (
		<NumberFieldPrimitive.ErrorMessage
			class={cn("stt-text-sm stt-text-error-foreground", local.class)}
			{...others}
		/>
	);
};

export {
	NumberField,
	NumberFieldDecrementTrigger,
	NumberFieldDescription,
	NumberFieldErrorMessage,
	NumberFieldGroup,
	NumberFieldIncrementTrigger,
	NumberFieldInput,
	NumberFieldLabel,
};
