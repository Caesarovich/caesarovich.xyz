import { A } from "@solidjs/router";

export default function NotFound() {
	return (
		<main class="mx-auto mt-32 flex h-full flex-col justify-center text-center">
			<h1 class="font-bold text-4xl">404 - Not Found</h1>
			<p class="text-lg">The page you are looking for does not exist.</p>
			<p>
				<A href="/" class="text-blue-500 hover:underline">
					Go back home
				</A>
			</p>
		</main>
	);
}
