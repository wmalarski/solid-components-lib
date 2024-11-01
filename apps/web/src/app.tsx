import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import "@stt-design-system/ui/styles.css";
import { Suspense } from "solid-js";
import "./app.css";
import { Head } from "./components/common/head";

export default function App() {
	return (
		<Router
			root={(props) => (
				<MetaProvider>
					<Head />
					<Suspense>{props.children}</Suspense>
				</MetaProvider>
			)}
		>
			<FileRoutes />
		</Router>
	);
}
