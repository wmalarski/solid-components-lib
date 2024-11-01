import type { ValidComponent } from "solid-js";
import { Match, Switch, splitProps } from "solid-js";

import * as CheckboxPrimitive from "@kobalte/core/checkbox";
import type { PolymorphicProps } from "@kobalte/core/polymorphic";

import { cn } from "../utils";

type CheckboxRootProps<T extends ValidComponent = "div"> =
	CheckboxPrimitive.CheckboxRootProps<T> & { class?: string | undefined };

const Checkbox = <T extends ValidComponent = "div">(
	props: PolymorphicProps<T, CheckboxRootProps<T>>,
) => {
	const [local, others] = splitProps(props as CheckboxRootProps, ["class"]);
	return (
		<CheckboxPrimitive.Root
			class={cn("stt-items-top stt-group stt-flex stt-space-x-2", local.class)}
			{...others}
		>
			<CheckboxPrimitive.Input class="stt-peer" />
			<CheckboxPrimitive.Control class="stt-size-4 stt-shrink-0 stt-rounded-sm stt-border stt-border-primary stt-ring-offset-background disabled:stt-cursor-not-allowed disabled:stt-opacity-50 peer-focus-visible:stt-outline-none peer-focus-visible:stt-ring-2 peer-focus-visible:stt-ring-ring peer-focus-visible:stt-ring-offset-2 data-[checked]:stt-border-none data-[indeterminate]:stt-border-none data-[checked]:stt-bg-primary data-[indeterminate]:stt-bg-primary data-[checked]:stt-text-primary-foreground data-[indeterminate]:stt-text-primary-foreground">
				<CheckboxPrimitive.Indicator>
					<Switch>
						<Match when={!others.indeterminate}>
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
								<title>Check</title>
								<path d="M5 12l5 5l10 -10" />
							</svg>
						</Match>
						<Match when={others.indeterminate}>
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
								<title>Indeterminate</title>
								<path d="M5 12l14 0" />
							</svg>
						</Match>
					</Switch>
				</CheckboxPrimitive.Indicator>
			</CheckboxPrimitive.Control>
		</CheckboxPrimitive.Root>
	);
};

export { Checkbox };
