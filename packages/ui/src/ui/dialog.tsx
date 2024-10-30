import type { Component, ComponentProps, JSX, ValidComponent } from "solid-js";
import { splitProps } from "solid-js";

import * as DialogPrimitive from "@kobalte/core/dialog";
import type { PolymorphicProps } from "@kobalte/core/polymorphic";

import { cn } from "../utils";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal: Component<DialogPrimitive.DialogPortalProps> = (props) => {
	const [, rest] = splitProps(props, ["children"]);
	return (
		<DialogPrimitive.Portal {...rest}>
			<div class="stt-fixed stt-inset-0 stt-z-50 stt-flex stt-items-start stt-justify-center sm:stt-items-center">
				{props.children}
			</div>
		</DialogPrimitive.Portal>
	);
};

type DialogOverlayProps<T extends ValidComponent = "div"> =
	DialogPrimitive.DialogOverlayProps<T> & { class?: string | undefined };

const DialogOverlay = <T extends ValidComponent = "div">(
	props: PolymorphicProps<T, DialogOverlayProps<T>>,
) => {
	const [, rest] = splitProps(props as DialogOverlayProps, ["class"]);
	return (
		<DialogPrimitive.Overlay
			class={cn(
				"stt-fixed stt-inset-0 stt-z-50 stt-bg-background/80 stt-backdrop-blur-sm data-[expanded]:stt-animate-in data-[closed]:stt-animate-out data-[closed]:stt-fade-out-0 data-[expanded]:stt-fade-in-0",
				props.class,
			)}
			{...rest}
		/>
	);
};

type DialogContentProps<T extends ValidComponent = "div"> =
	DialogPrimitive.DialogContentProps<T> & {
		class?: string | undefined;
		children?: JSX.Element;
	};

const DialogContent = <T extends ValidComponent = "div">(
	props: PolymorphicProps<T, DialogContentProps<T>>,
) => {
	const [, rest] = splitProps(props as DialogContentProps, [
		"class",
		"children",
	]);
	return (
		<DialogPortal>
			<DialogOverlay />
			<DialogPrimitive.Content
				class={cn(
					"stt-fixed stt-left-1/2 stt-top-1/2 stt-z-50 stt-grid stt-max-h-screen stt-w-full stt-max-w-lg stt--translate-x-1/2 stt--translate-y-1/2 stt-gap-4 stt-overflow-y-auto stt-border stt-bg-background stt-p-6 stt-shadow-lg stt-duration-200 data-[expanded]:stt-animate-in data-[closed]:stt-animate-out data-[closed]:stt-fade-out-0 data-[expanded]:stt-fade-in-0 data-[closed]:stt-zoom-out-95 data-[expanded]:stt-zoom-in-95 data-[closed]:stt-slide-out-to-left-1/2 data-[closed]:stt-slide-out-to-top-[48%] data-[expanded]:stt-slide-in-from-left-1/2 data-[expanded]:stt-slide-in-from-top-[48%] sm:stt-rounded-lg",
					props.class,
				)}
				{...rest}
			>
				{props.children}
				<DialogPrimitive.CloseButton class="stt-absolute stt-right-4 stt-top-4 stt-rounded-sm stt-opacity-70 stt-ring-offset-background stt-transition-opacity hover:stt-opacity-100 focus:stt-outline-none focus:stt-ring-2 focus:stt-ring-ring focus:stt-ring-offset-2 disabled:stt-pointer-events-none data-[expanded]:stt-bg-accent data-[expanded]:stt-text-muted-foreground">
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
						<title>X Icon</title>
						<path d="M18 6l-12 12" />
						<path d="M6 6l12 12" />
					</svg>
					<span class="stt-sr-only">Close</span>
				</DialogPrimitive.CloseButton>
			</DialogPrimitive.Content>
		</DialogPortal>
	);
};

const DialogHeader: Component<ComponentProps<"div">> = (props) => {
	const [, rest] = splitProps(props, ["class"]);
	return (
		<div
			class={cn(
				"stt-flex stt-flex-col stt-space-y-1.5 stt-text-center sm:stt-text-left",
				props.class,
			)}
			{...rest}
		/>
	);
};

const DialogFooter: Component<ComponentProps<"div">> = (props) => {
	const [, rest] = splitProps(props, ["class"]);
	return (
		<div
			class={cn(
				"stt-flex stt-flex-col-reverse sm:stt-flex-row sm:stt-justify-end sm:stt-space-x-2",
				props.class,
			)}
			{...rest}
		/>
	);
};

type DialogTitleProps<T extends ValidComponent = "h2"> =
	DialogPrimitive.DialogTitleProps<T> & {
		class?: string | undefined;
	};

const DialogTitle = <T extends ValidComponent = "h2">(
	props: PolymorphicProps<T, DialogTitleProps<T>>,
) => {
	const [, rest] = splitProps(props as DialogTitleProps, ["class"]);
	return (
		<DialogPrimitive.Title
			class={cn(
				"stt-text-lg stt-font-semibold stt-leading-none stt-tracking-tight",
				props.class,
			)}
			{...rest}
		/>
	);
};

type DialogDescriptionProps<T extends ValidComponent = "p"> =
	DialogPrimitive.DialogDescriptionProps<T> & {
		class?: string | undefined;
	};

const DialogDescription = <T extends ValidComponent = "p">(
	props: PolymorphicProps<T, DialogDescriptionProps<T>>,
) => {
	const [, rest] = splitProps(props as DialogDescriptionProps, ["class"]);
	return (
		<DialogPrimitive.Description
			class={cn("stt-text-sm stt-text-muted-foreground", props.class)}
			{...rest}
		/>
	);
};

export {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
};
