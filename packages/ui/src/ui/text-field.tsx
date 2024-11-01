import type { ValidComponent } from "solid-js";
import { splitProps } from "solid-js";

import type { PolymorphicProps } from "@kobalte/core";
import * as TextFieldPrimitive from "@kobalte/core/text-field";
import { cva } from "class-variance-authority";

import { cn } from "../utils";

const TextField = TextFieldPrimitive.Root;

type TextFieldInputProps<T extends ValidComponent = "input"> =
	TextFieldPrimitive.TextFieldInputProps<T> & {
		class?: string | undefined;
		type:
			| "button"
			| "checkbox"
			| "color"
			| "date"
			| "datetime-local"
			| "email"
			| "file"
			| "hidden"
			| "image"
			| "month"
			| "number"
			| "password"
			| "radio"
			| "range"
			| "reset"
			| "search"
			| "submit"
			| "tel"
			| "text"
			| "time"
			| "url"
			| "week";
	};

const TextFieldInput = <T extends ValidComponent = "input">(
	props: PolymorphicProps<T, TextFieldInputProps<T>>,
) => {
	const [local, others] = splitProps(props as TextFieldInputProps, [
		"type",
		"class",
	]);
	return (
		<TextFieldPrimitive.Input
			type={local.type}
			class={cn(
				"stt-flex stt-h-10 stt-w-full stt-rounded-md stt-border stt-border-input stt-bg-transparent stt-px-3 stt-py-2 stt-text-sm stt-ring-offset-background file:stt-border-0 file:stt-bg-transparent file:stt-text-sm file:stt-font-medium placeholder:stt-text-muted-foreground focus-visible:stt-outline-none focus-visible:stt-ring-2 focus-visible:stt-ring-ring focus-visible:stt-ring-offset-2 disabled:stt-cursor-not-allowed disabled:stt-opacity-50",
				local.class,
			)}
			{...others}
		/>
	);
};

type TextFieldTextAreaProps<T extends ValidComponent = "textarea"> =
	TextFieldPrimitive.TextFieldTextAreaProps<T> & { class?: string | undefined };

const TextFieldTextArea = <T extends ValidComponent = "textarea">(
	props: PolymorphicProps<T, TextFieldTextAreaProps<T>>,
) => {
	const [local, others] = splitProps(props as TextFieldTextAreaProps, [
		"class",
	]);
	return (
		<TextFieldPrimitive.TextArea
			class={cn(
				"stt-flex stt-min-h-[80px] stt-w-full stt-rounded-md stt-border stt-border-input stt-bg-background stt-px-3 stt-py-2 stt-text-sm stt-ring-offset-background placeholder:stt-text-muted-foreground focus-visible:stt-outline-none focus-visible:stt-ring-2 focus-visible:stt-ring-ring focus-visible:stt-ring-offset-2 disabled:stt-cursor-not-allowed disabled:stt-opacity-50",
				local.class,
			)}
			{...others}
		/>
	);
};

const labelVariants = cva(
	"stt-text-sm stt-font-medium stt-leading-none peer-disabled:stt-cursor-not-allowed peer-disabled:stt-opacity-70",
	{
		variants: {
			variant: {
				label: "data-[invalid]:stt-text-destructive",
				description: "stt-text-destructive",
				error: "stt-font-normal stt-text-muted-foreground",
			},
		},
		defaultVariants: {
			variant: "label",
		},
	},
);

type TextFieldLabelProps<T extends ValidComponent = "label"> =
	TextFieldPrimitive.TextFieldLabelProps<T> & { class?: string | undefined };

const TextFieldLabel = <T extends ValidComponent = "label">(
	props: PolymorphicProps<T, TextFieldLabelProps<T>>,
) => {
	const [local, others] = splitProps(props as TextFieldLabelProps, ["class"]);
	return (
		<TextFieldPrimitive.Label
			class={cn(labelVariants(), local.class)}
			{...others}
		/>
	);
};

type TextFieldDescriptionProps<T extends ValidComponent = "div"> =
	TextFieldPrimitive.TextFieldDescriptionProps<T> & {
		class?: string | undefined;
	};

const TextFieldDescription = <T extends ValidComponent = "div">(
	props: PolymorphicProps<T, TextFieldDescriptionProps<T>>,
) => {
	const [local, others] = splitProps(props as TextFieldDescriptionProps, [
		"class",
	]);
	return (
		<TextFieldPrimitive.Description
			class={cn(labelVariants({ variant: "description" }), local.class)}
			{...others}
		/>
	);
};

type TextFieldErrorMessageProps<T extends ValidComponent = "div"> =
	TextFieldPrimitive.TextFieldErrorMessageProps<T> & {
		class?: string | undefined;
	};

const TextFieldErrorMessage = <T extends ValidComponent = "div">(
	props: PolymorphicProps<T, TextFieldErrorMessageProps<T>>,
) => {
	const [local, others] = splitProps(props as TextFieldErrorMessageProps, [
		"class",
	]);
	return (
		<TextFieldPrimitive.ErrorMessage
			class={cn(labelVariants({ variant: "error" }), local.class)}
			{...others}
		/>
	);
};

export {
	TextField,
	TextFieldDescription,
	TextFieldErrorMessage,
	TextFieldInput,
	TextFieldLabel,
	TextFieldTextArea,
};
