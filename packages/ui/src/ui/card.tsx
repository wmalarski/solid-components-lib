import type { Component, ComponentProps } from "solid-js";
import { splitProps } from "solid-js";

import { cn } from "../utils";

const Card: Component<ComponentProps<"div">> = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return (
		<div
			class={cn(
				"stt-rounded-lg stt-border stt-bg-card stt-text-card-foreground stt-shadow-sm",
				local.class,
			)}
			{...others}
		/>
	);
};

const CardHeader: Component<ComponentProps<"div">> = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return (
		<div
			class={cn("stt-flex stt-flex-col stt-space-y-1.5 stt-p-6", local.class)}
			{...others}
		/>
	);
};

const CardTitle: Component<ComponentProps<"h3">> = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return (
		<h3
			class={cn(
				"stt-text-lg stt-font-semibold stt-leading-none stt-tracking-tight",
				local.class,
			)}
			{...others}
		/>
	);
};

const CardDescription: Component<ComponentProps<"p">> = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return (
		<p
			class={cn("stt-text-sm stt-text-muted-foreground", local.class)}
			{...others}
		/>
	);
};

const CardContent: Component<ComponentProps<"div">> = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return <div class={cn("stt-p-6 stt-pt-0", local.class)} {...others} />;
};

const CardFooter: Component<ComponentProps<"div">> = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return (
		<div
			class={cn("stt-flex stt-items-center stt-p-6 stt-pt-0", local.class)}
			{...others}
		/>
	);
};

export {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
};
