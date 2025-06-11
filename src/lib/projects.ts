import type { ProjectTagName } from "./project-tags";

export type Project = {
	name: string;
	description: string;
	repositryUrl?: string;
	pubDevUrl?: string;
	npmUrl?: string;
	websiteUrl?: string;
	tags?: ProjectTagName[];
};

export const projects: Project[] = [
	{
		name: "legalize",
		description:
			"A library that provides a set of functions to validate and sanitize filenames for different operating systems.",
		repositryUrl: "https://github.com/Caesarovich/legalize",
		pubDevUrl: "https://pub.dev/packages/legalize",
		tags: ["Dart", "pub.dev", "CI/CD", "Library"],
	},
	{
		name: "boxen",
		description: "Create boxes in the terminal.",
		repositryUrl: "https://github.com/sindresorhus/boxen",
		npmUrl: "https://www.npmjs.com/package/boxen",
		tags: ["Maintainer", "Node.js", "JavaScript", "CLI", "Library", "CI/CD"],
	},
	{
		name: "motu",
		description: "A complete backoffice solution for an inovative School. ",
		tags: [
			"CI/CD",
			"Bun",
			"TailwindCSS",
			"DaisyUI",
			"SolidJS",
			"PostgreSQL",
			"Biome",
		],
	},
	{
		name: "ExGen Hacking CTF",
		description:
			'A "hacking" challenge meant for my students to learn the basics of Linux commands in a fun way. ',
		repositryUrl: "https://github.com/Caesarovich/exgen-hacking-ctf",
		websiteUrl: "https://exgen-ctf.caesarovich.xyz/play",
		tags: [
			"Cybersecurity",
			"TypeScript",
			"Bun",
			"SolidJS",
			"SolidStart",
			"TailwindCSS",
			"DaisyUI",
			"SQLite",
			"Drizzle ORM",
			"Zod",
			"Docker",
			"Biome",
			"CI/CD",
		],
	},
	{
		name: "Optimus Chat App",
		description:
			"A simple chat application built with only Bun for the backend. The frontend is built with React and TailwindCSS. It is a project made with my friend to teach him about Bun and Typescript.",
		repositryUrl: "https://github.com/Azarielh/Optimus_chat",
		websiteUrl: "https://optimus-chat.caesarovich.xyz/",
		tags: [
			"Bun",
			"TypeScript",
			"React",
			"TailwindCSS",
			"DaisyUI",
			"WebSockets",
			"Docker",
		],
	},
	{
		name: "better-turtle",
		description: "Isomorphic LOGO Turtle made in TypeScript.",
		repositryUrl: "https://github.com/Caesarovich/better-turtle",
		npmUrl: "https://www.npmjs.com/package/better-turtle",
		tags: ["TypeScript", "Node.js", "Library", "CI/CD"],
	},
	{
		name: "Ansible Module for plists",
		description: "An Ansible module for creating and manipulating plist files.",
		repositryUrl: "https://github.com/Caesarovich/ansible-modules-plist",
		tags: ["Python", "Ansible", "CI/CD"],
	},
	{
		name: "Rome Webshell",
		description:
			"A powerful and delightful PHP webshell. It is used to execute commands on a server when pentesting.",
		repositryUrl: "https://github.com/Caesarovich/rome-webshell",
		tags: ["PHP", "CSS", "Cybersecurity"],
	},
	{
		name: "LocalSend",
		description:
			"LocalSend is a free, open-source app that allows you to securely share files and messages with nearby devices over your local network without needing an internet connection.",
		repositryUrl: "https://github.com/localsend/localsend",
		tags: ["Maintainer", "Dart", "Flutter", "CI/CD"],
	},
	{
		name: "Maze Generator",
		description:
			"A simple web application that generates mazes using different algorithms.",
		repositryUrl: "https://github.com/Caesarovich/maze-generator",
		websiteUrl: "https://maze-generator.caesarovich.xyz/",
		tags: [
			"Bun",
			"SolidJS",
			"SolidStart",
			"TypeScript",
			"Biome",
			"CI/CD",
			"DaisyUI",
			"TailwindCSS",
			"Graphics",
		],
	},
	{
		name: "GmodCleanup",
		description:
			"Simple Bacth script to clean up unused Garrys Mod files and cache.",
		repositryUrl: "https://github.com/Caesarovich/GmodCleanup",
		tags: ["Batch", "Modding", "Windows", "Tool", "CLI"],
	},
	{
		name: "Cyber Empire Bot",
		description:
			"A Discord bot for the Cyber Empire server. It is feature-rich and creates a fun and engaging experience for the users by running daily CTF Challenges.",
		repositryUrl: "https://github.com/Caesarovich/cyber-empire-bot",
		tags: [
			"Node.js",
			"TypeScript",
			"Discord.js",
			"Sapphire",
			"Cybersecurity",
			"CI/CD",
			"Docker",
			"PostgreSQL",
			"Drizzle ORM",
			"Zod",
			"Prettier",
		],
	},
	{
		name: "Libft",
		description:
			"Libft is an individual project at 42 that requires you to re-create some standard C library functions including some additional ones.",
		tags: ["C Lang", "42", "Library", "Makefile"],
	},
	{
		name: "ft_printf",
		description:
			"ft_printf is an individual project at 42 that requires you to re-create the printf function.",
		tags: ["C Lang", "42", "Library", "Makefile"],
	},
	{
		name: "get_next_line",
		description:
			"get_next_line is an individual project at 42 that requires you to create a function that reads a line ending with a newline character from a file descriptor.",
		tags: ["C Lang", "42", "Library", "Makefile"],
	},
	{
		name: "FdF",
		description:
			"FdF is an individual project at 42 that requires you to create a 3D wireframe renderer.",
		tags: ["C Lang", "42", "Makefile", "MiniLibX", "Graphics"],
	},
];
