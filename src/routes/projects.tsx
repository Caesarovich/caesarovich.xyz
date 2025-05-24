import { A } from "@solidjs/router";
import { FaSolidGlobe } from "solid-icons/fa";
import { SiDart, SiNpm } from "solid-icons/si";
import { VsGithubAlt } from "solid-icons/vs";
import { For } from "solid-js";
import { type ProjectTagName, getProjectTag } from "~/lib/project-tags";
import { type Project, projects } from "~/lib/projects";

function GithubButton({ url }: { url?: string }) {
	if (!url) return null;

	return (
		<div class="tooltip" data-tip="View on GitHub">
			<A target="_blank" href={url} class="btn btn-square btn-outline p-0">
				<VsGithubAlt class="size-6" />
			</A>
		</div>
	);
}

function PubDevButton({ url }: { url?: string }) {
	if (!url) return null;

	return (
		<div class="tooltip" data-tip="View on pub.dev">
			<A target="_blank" href={url} class="btn btn-square btn-outline p-0">
				<SiDart class="size-6" />
			</A>
		</div>
	);
}

function NpmButton({ url }: { url?: string }) {
	if (!url) return null;

	return (
		<div class="tooltip" data-tip="View on npm">
			<A target="_blank" href={url} class="btn btn-square btn-outline p-0">
				<SiNpm class="size-6" />
			</A>
		</div>
	);
}

function WebsiteButton({ url }: { url?: string }) {
	if (!url) return null;

	return (
		<div class="tooltip" data-tip="Visit Website">
			<A target="_blank" href={url} class="btn btn-square btn-outline p-0">
				<FaSolidGlobe class="size-6" />
			</A>
		</div>
	);
}

function ProjectTag(props: { name: ProjectTagName }) {
	const tag = getProjectTag(props.name);

	return tag.url ? (
		<A href={tag.url} target="_blank" class={`badge border-none ${tag.color}`}>
			{props.name}
		</A>
	) : (
		<span class={`badge border-none ${tag.color}`}>{props.name}</span>
	);
}

type ProjectCardProps = Project & {
	delay: number;
};

function ProjectCard(props: ProjectCardProps) {
	return (
		<div
			class="card animate-fade-up bg-base-300 bg-opacity-30 shadow-xl"
			style={{
				"animation-delay": `${props.delay}ms`,
			}}
		>
			<div class="card-body">
				<h2 class="card-title">{props.name}</h2>

				<p>{props.description}</p>
				<div class="mt-4 flex flex-wrap gap-2">
					<For each={props.tags}>{(tag) => <ProjectTag name={tag} />}</For>
				</div>
				<div class="card-actions justify-end gap-4">
					<PubDevButton url={props.pubDevUrl} />
					<NpmButton url={props.npmUrl} />
					<GithubButton url={props.repositryUrl} />
					<WebsiteButton url={props.websiteUrl} />
				</div>
			</div>
		</div>
	);
}

export default function Projects() {
	return (
		<main class="container mx-auto p-6">
			<div class="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				<For each={projects}>
					{(item, index) => <ProjectCard {...item} delay={index() * 200} />}
				</For>
			</div>
		</main>
	);
}
