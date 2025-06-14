// @refresh reload
import { StartServer, createHandler } from "@solidjs/start/server";

export default createHandler(() => (
	<StartServer
		document={({ assets, children, scripts }) => (
			<html lang="en">
				<head>
					<meta charset="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" href="/favicon.ico" />
					{assets}
				</head>
				<body class="bg-linear-to-br from-purple-900 to-indigo-900 text-slate-50">
					<div id="app">{children}</div>
					{scripts}
				</body>
			</html>
		)}
	/>
));
