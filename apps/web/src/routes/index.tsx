import { Title } from "@solidjs/meta";
import { Button } from "@stt-design-system/ui";

export default function Home() {
	return (
		<main>
			<Title>Hello World</Title>
			<h1 class="font-bold">Hello world!</h1>
			<p>
				Visit{" "}
				<a href="https://start.solidjs.com" target="_blank" rel="noreferrer">
					start.solidjs.com
				</a>{" "}
				to learn how to build SolidStart apps.
			</p>
			<Button>AA</Button>
		</main>
	);
}
