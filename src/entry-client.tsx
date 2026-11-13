// @refresh reload
import { mount, StartClient } from "@solidjs/start/client";
import { inject } from "@vercel/analytics";

inject();

// biome-ignore lint/style/noNonNullAssertion: Default behavior
mount(() => <StartClient />, document.getElementById("app")!);
