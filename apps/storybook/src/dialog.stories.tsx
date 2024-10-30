import {
	Button,
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@stt-design-system/ui";

const meta = {
	component: Dialog,
	argTypes: {},
};

export default meta;

export const Primary = {
	render: () => (
		<Dialog>
			<DialogTrigger as={Button} variant="outline">
				Share
			</DialogTrigger>
			<DialogContent class="sm:max-w-md">
				<DialogHeader>
					<DialogTitle>Share link</DialogTitle>
					<DialogDescription>
						Anyone who has this link will be able to view this.
					</DialogDescription>
				</DialogHeader>
				<div class="flex items-center space-x-2">
					<div class="grid flex-1 gap-2">
						<label for="link" class="sr-only">
							Link
						</label>
						<input
							id="link"
							value="https://ui.shadcn.com/docs/installation"
							readOnly
						/>
					</div>
					<Button type="submit" size="sm" class="px-3">
						<span class="sr-only">Copy</span>
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	),
	name: "Dialog",
	args: {},
};
