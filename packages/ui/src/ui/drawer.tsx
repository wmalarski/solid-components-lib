import type { Component, ComponentProps, JSX, ValidComponent } from "solid-js";
import { splitProps } from "solid-js";

import type {
	ContentProps,
	DescriptionProps,
	DynamicProps,
	LabelProps,
	OverlayProps,
} from "@corvu/drawer";
import DrawerPrimitive from "@corvu/drawer";

import { cn } from "../utils";

const Drawer = DrawerPrimitive;

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

type DrawerOverlayProps<T extends ValidComponent = "div"> = OverlayProps<T> & {
	class?: string;
};

const DrawerOverlay = <T extends ValidComponent = "div">(
	props: DynamicProps<T, DrawerOverlayProps<T>>,
) => {
	const [, rest] = splitProps(props as DrawerOverlayProps, ["class"]);
	const drawerContext = DrawerPrimitive.useContext();
	return (
		<DrawerPrimitive.Overlay
			class={cn(
				"stt-fixed stt-inset-0 stt-z-50 data-[transitioning]:stt-transition-colors data-[transitioning]:stt-duration-300",
				props.class,
			)}
			style={{
				"background-color": `rgb(0 0 0 / ${0.8 * drawerContext.openPercentage()})`,
			}}
			{...rest}
		/>
	);
};

type DrawerContentProps<T extends ValidComponent = "div"> = ContentProps<T> & {
	class?: string;
	children?: JSX.Element;
};

const DrawerContent = <T extends ValidComponent = "div">(
	props: DynamicProps<T, DrawerContentProps<T>>,
) => {
	const [, rest] = splitProps(props as DrawerContentProps, [
		"class",
		"children",
	]);
	return (
		<DrawerPortal>
			<DrawerOverlay />
			<DrawerPrimitive.Content
				class={cn(
					"stt-fixed stt-inset-x-0 stt-bottom-0 stt-z-50 stt-mt-24 stt-flex stt-h-auto stt-flex-col stt-rounded-t-[10px] stt-border stt-bg-background after:stt-absolute after:stt-inset-x-0 after:stt-top-full after:stt-h-1/2 after:stt-bg-inherit data-[transitioning]:stt-transition-transform data-[transitioning]:stt-duration-300 md:stt-select-none",
					props.class,
				)}
				{...rest}
			>
				<div class="stt-mx-auto stt-mt-4 stt-h-2 stt-w-[100px] stt-rounded-full stt-bg-muted" />
				{props.children}
			</DrawerPrimitive.Content>
		</DrawerPortal>
	);
};

const DrawerHeader: Component<ComponentProps<"div">> = (props) => {
	const [, rest] = splitProps(props, ["class"]);
	return (
		<div
			class={cn(
				"stt-grid stt-gap-1.5 stt-p-4 stt-text-center sm:stt-text-left",
				props.class,
			)}
			{...rest}
		/>
	);
};

const DrawerFooter: Component<ComponentProps<"div">> = (props) => {
	const [, rest] = splitProps(props, ["class"]);
	return (
		<div
			class={cn(
				"stt-t-auto stt-flex stt-flex-col stt-gap-2 stt-p-4",
				props.class,
			)}
			{...rest}
		/>
	);
};

type DrawerTitleProps<T extends ValidComponent = "div"> = LabelProps<T> & {
	class?: string;
};

const DrawerTitle = <T extends ValidComponent = "div">(
	props: DynamicProps<T, DrawerTitleProps<T>>,
) => {
	const [, rest] = splitProps(props as DrawerTitleProps, ["class"]);
	return (
		<DrawerPrimitive.Label
			class={cn(
				"stt-text-lg stt-font-semibold stt-leading-none stt-tracking-tight",
				props.class,
			)}
			{...rest}
		/>
	);
};

type DrawerDescriptionProps<T extends ValidComponent = "div"> =
	DescriptionProps<T> & {
		class?: string;
	};

const DrawerDescription = <T extends ValidComponent = "div">(
	props: DynamicProps<T, DrawerDescriptionProps<T>>,
) => {
	const [, rest] = splitProps(props as DrawerDescriptionProps, ["class"]);
	return (
		<DrawerPrimitive.Description
			class={cn("stt-text-sm stt-text-muted-foreground", props.class)}
			{...rest}
		/>
	);
};

export {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerPortal,
	DrawerTitle,
	DrawerTrigger,
};
