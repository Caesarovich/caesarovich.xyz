import type { IconTypes } from "solid-icons";
import { BiLogosGoLang, BiLogosTypescript } from "solid-icons/bi";
import { SiDart, SiDocker, SiLinuxmint, SiNixos } from "solid-icons/si";
import { VsCode } from "solid-icons/vs";

type LanguageCardProps = {
	name: string;
	icon: IconTypes;
};

function Card(props: LanguageCardProps) {
	return (
		<div class="card h-full w-48 animate-fade-up bg-base-300 bg-opacity-30 shadow-xl">
			<div class="card-body items-center justify-evenly">
				<props.icon class="size-16" />
				<h2 class="card-title text-center">{props.name}</h2>
			</div>
		</div>
	);
}

export default function Home() {
	return (
		<main class="container mx-auto min-h-screen overflow-visible p-6">
			<section class="my-12">
				<h1 class="animate-fade-right font-bold text-8xl">Hi,</h1>
				<h2 class="mt-4 animate-delay-1000 animate-flip-up text-6xl">
					I'm a Fullstack Developer
				</h2>
			</section>

			<section class="my-12 animate-delay-[2500ms] animate-fade">
				<p class="mt-4 text-2xl">
					Well I don't really have much to say... So here's a bunch of random
					stuff about me.
				</p>
			</section>

			<section class="my-12 animate-delay-[3500ms] animate-fade">
				<h3 class="text-center font-semibold text-4xl">My Environment 🖥️</h3>
				<ul class="mt-6 flex flex-wrap justify-center gap-8 overflow-visible">
					<li>
						<Card name="NixOS" icon={SiNixos} />
					</li>
					<li>
						<Card name="Linux Mint" icon={SiLinuxmint} />
					</li>
					<li>
						<Card name="VSCode" icon={VsCode} />
					</li>
					<li>
						<Card name="Dev Containers" icon={SiDocker} />
					</li>
				</ul>
			</section>

			<section class="my-12 animate-delay-[4500ms] animate-fade">
				<h3 class="text-center font-semibold text-4xl">Languages I ❤️</h3>
				<ul class="mt-6 flex flex-wrap justify-center gap-8 overflow-visible">
					<li>
						<Card name="TypeScript" icon={BiLogosTypescript} />
					</li>
					<li>
						<Card name="Go Lang" icon={BiLogosGoLang} />
					</li>
					<li>
						<Card name="Dart" icon={SiDart} />
					</li>
				</ul>
			</section>
		</main>
	);
}
