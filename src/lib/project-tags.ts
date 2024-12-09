export type ProjectTag = {
	name: string;
	color: string;
	url?: string;
};

// Ensure projectTagsArray is a readonly tuple
const projectTagsArray = [
	// Langs
	{
		name: "JavaScript",
		color: "bg-yellow-100 text-yellow-800",
		url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
	},
	{
		name: "TypeScript",
		color: "bg-blue-200 text-blue-800",
		url: "https://www.typescriptlang.org/",
	},
	{ name: "Dart", color: "bg-sky-300 text-sky-900", url: "https://dart.dev/" },
	{
		name: "Batch",
		color: "bg-teal-100 text-teal-800",
		url: "https://en.wikipedia.org/wiki/Batch_file",
	},
	{
		name: "PHP",
		color: "bg-purple-100 text-purple-800",
		url: "https://www.php.net/",
	},
	{
		name: "Python",
		color: "bg-blue-100 text-blue-800",
		url: "https://www.python.org/",
	},
	{
		name: "C Lang",
		color: "bg-blue-100 text-blue-800",
		url: "https://en.wikipedia.org/wiki/C_(programming_language)",
	},

	// Runtimes
	{
		name: "Node.js",
		color: "bg-green-100 text-green-800",
		url: "https://nodejs.org/",
	},
	{ name: "Bun", color: "bg-blue-100 text-blue-800", url: "https://bun.sh/" },
	{
		name: "Ansible",
		color: "bg-red-100 text-red-800",
		url: "https://www.ansible.com/",
	},

	// Deploys
	{
		name: "Docker",
		color: "bg-blue-300 text-blue-800",
		url: "https://www.docker.com/",
	},
	{
		name: "pub.dev",
		color: "bg-sky-300 text-sky-900",
		url: "https://pub.dev/",
	},
	{
		name: "npm",
		color: "bg-red-100 text-red-800",
		url: "https://www.npmjs.com/",
	},

	// Styling
	{
		name: "CSS",
		color: "bg-blue-100 text-blue-800",
		url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
	},
	{
		name: "TailwindCSS",
		color: "bg-blue-100 text-blue-800",
		url: "https://tailwindcss.com/",
	},
	{
		name: "DaisyUI",
		color: "bg-blue-100 text-blue-800",
		url: "https://daisyui.com/",
	},

	// Libraries
	{ name: "Zod", color: "bg-blue-100 text-blue-800", url: "https://zod.dev/" },
	{
		name: "Discord.js",
		color: "bg-blue-100 text-blue-800",
		url: "https://discord.js.org/",
	},
	{
		name: "Drizzle ORM",
		color: "bg-blue-100 text-blue-800",
		url: "https://orm.drizzle.team/",
	},

	// Frameworks
	{
		name: "SolidJS",
		color: "bg-blue-100 text-blue-800",
		url: "https://www.solidjs.com/",
	},
	{
		name: "SolidStart",
		color: "bg-blue-100 text-blue-800",
		url: "https://start.solidjs.com/",
	},
	{
		name: "Flutter",
		color: "bg-sky-300 text-sky-900",
		url: "https://flutter.dev/",
	},
	{
		name: "Sapphire",
		color: "bg-blue-100 text-blue-800",
		url: "https://www.sapphirejs.dev/",
	},

	// Services
	{
		name: "Supabase",
		color: "bg-blue-100 text-blue-800",
		url: "https://supabase.io/",
	},

	// Tools
	{
		name: "Prettier",
		color: "bg-purple-100 text-purple-800",
		url: "https://prettier.io/",
	},
	{
		name: "Biome",
		color: "bg-blue-100 text-blue-800",
		url: "https://biomejs.dev/",
	},
	{
		name: "Makefile",
		color: "bg-blue-100 text-blue-800",
		url: "https://en.wikipedia.org/wiki/Make_(software)",
	},

	// Databases
	{
		name: "PostgreSQL",
		color: "bg-blue-100 text-blue-800",
		url: "https://www.postgresql.org/",
	},

	// Misc
	{ name: "CI/CD", color: "bg-green-100 text-green-800" },
	{ name: "Library", color: "bg-green-100 text-green-800" },
	{ name: "Maintainer", color: "bg-green-100 text-green-800" },
	{ name: "Tool", color: "bg-green-100 text-green-800" },
	{ name: "Cybersecurity", color: "bg-red-100 text-red-800" },
	{
		name: "42",
		color: "bg-blue-100 text-blue-800",
		url: "https://en.wikipedia.org/wiki/42_(school)",
	},
	{ name: "MiniLibX", color: "bg-blue-100 text-blue-800" },
	{ name: "Graphics", color: "bg-blue-100 text-blue-800" },
	{ name: "CLI", color: "bg-blue-100 text-blue-800" },
	{ name: "Graphics", color: "bg-blue-100 text-blue-800" },
	{ name: "Windows", color: "bg-blue-100 text-blue-800" },
	{ name: "Modding", color: "bg-blue-100 text-blue-800" },
] as const;

// Updated ProjectTagName to derive from the 'name' property of projectTagsArray
export type ProjectTagName = (typeof projectTagsArray)[number]["name"];

export const projectTags: { [K in ProjectTagName]: ProjectTag } =
	projectTagsArray.reduce(
		(acc, tag) => {
			acc[tag.name] = tag;
			return acc;
		},
		{} as { [K in ProjectTagName]: ProjectTag },
	);

export type ProjectTagKey = keyof typeof projectTags;

export function getProjectTag(name: ProjectTagName): ProjectTag {
	return projectTags[name];
}
