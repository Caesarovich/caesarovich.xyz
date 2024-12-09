import { A } from "@solidjs/router";

export default function NotFound() {
	return (
		<main class="text-center mx-auto flex flex-col h-full justify-center mt-32">
			<h1 class="text-4xl font-bold">404 - Not Found</h1>
			<p class="text-lg">The page you are looking for does not exist.</p>
			<p>
				<A href="/" class="text-blue-500 hover:underline">
					Go back home
				</A>
			</p>
		</main>
	);
}
