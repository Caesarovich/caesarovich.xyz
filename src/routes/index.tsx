import { A } from "@solidjs/router";
import type { IconTypes } from "solid-icons";
import { BiLogosTypescript, BiLogosGoLang } from 'solid-icons/bi'
import { SiDart, SiDocker, SiLinuxmint, SiNixos } from 'solid-icons/si'
import { VsCode } from "solid-icons/vs";

type LanguageCardProps = {
	name: string;
	icon: IconTypes;
}

function Card(props: LanguageCardProps) {
	return (
		<div class="card bg-base-300 shadow-xl animate-fade-up w-48 bg-opacity-30 h-full">
			<div class="card-body justify-evenly items-center">
				<props.icon class="size-16" />
				<h2 class="card-title text-center">
					{props.name}
				</h2>
			</div>
		</div>
	);
}

export default function Home() {
	return (
		<main class="container mx-auto p-6 min-h-screen overflow-visible">
			<section class="my-12">
				<h1 class="text-8xl font-bold animate-fade-right">Hi,</h1>
				<h2 class="text-6xl mt-4 animate-flip-up animate-delay-1000">I'm a Fullstack Developer</h2>


			</section>

			<section class="my-12 animate-fade animate-delay-[2500ms]">
				<p class="text-2xl mt-4">
					Well I don't really have much to say... So here's a bunch of random stuff about me.
				</p>
			</section>

			<section class="my-12 animate-fade animate-delay-[3500ms]">
				<h3 class="text-4xl font-semibold text-center">My Environment 🖥️</h3>
				<ul class="flex mt-6 gap-8 overflow-visible flex-wrap justify-center">
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

			<section class="my-12 animate-fade animate-delay-[4500ms]">
				<h3 class="text-4xl font-semibold text-center">Languages I ❤️</h3>
				<ul class="flex mt-6 gap-8 overflow-visible flex-wrap justify-center">
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