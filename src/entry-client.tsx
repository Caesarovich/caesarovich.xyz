// @refresh reload
import { StartClient, mount } from "@solidjs/start/client";
import { inject } from '@vercel/analytics';

inject();

// biome-ignore lint/style/noNonNullAssertion: Default behavior
mount(() => <StartClient />, document.getElementById("app")!);
