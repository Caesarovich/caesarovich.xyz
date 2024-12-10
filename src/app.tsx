import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import { Analytics } from "@vercel/analytics/react";
import Nav from "./components/Nav";

export default function App() {
	return (
		<Router
			root={(props) => (
				<>
					<MetaProvider>
						<Title>Caesarovich</Title>
					</MetaProvider>

					<Nav />
					<Suspense>{props.children}</Suspense>
					<Analytics />
				</>
			)}
		>
			<FileRoutes />
		</Router>
	);
}
