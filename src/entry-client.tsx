// @refresh reload
import { StartClient, mount } from "@solidjs/start/client";

// biome-ignore lint/style/noNonNullAssertion: Default behavior
mount(() => <StartClient />, document.getElementById("app")!);
