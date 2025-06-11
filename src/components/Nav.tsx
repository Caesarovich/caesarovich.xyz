import { A } from "@solidjs/router";
import { FiExternalLink } from "solid-icons/fi";

function NavLink(props: {
	href: string;
	children: string;
	external?: boolean;
}) {
	return (
		<li>
			<A
				inactiveClass="border-transparent hover:border-gray-200"
				activeClass="border-gray-200"
				class="mx-1.5 flex items-center gap-2 border-b-2 transition-all sm:mx-6"
				href={props.href}
				target={props.external ? "_blank" : undefined}
				end
			>
				{props.children}
				{props.external && <FiExternalLink />}
			</A>
		</li>
	);
}

export default function Nav() {
	return (
		<nav class="navbar">
			<div class="mx-auto">
				<ul class="flex text-xl">
					<NavLink href="/">Home</NavLink>
					<NavLink href="/projects">Projects</NavLink>
					<NavLink href="https://github.com/Caesarovich" external>
						GitHub
					</NavLink>
				</ul>
			</div>
		</nav>
	);
}
