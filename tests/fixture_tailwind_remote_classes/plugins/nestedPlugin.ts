import type { Plugin } from "../../../src/server/types.ts";
import NestedPluginComponent from "../components/NestedPluginComponent.tsx";
import AtPluginComponent from "@vscode_787_hack/components/AtPluginComponent.tsx";

const currentUrl = new URL(import.meta.url);
currentUrl.pathname = currentUrl.pathname.split("/").slice(0, -2).join("/") +
  "/";

export const nestedPlugin = {
  name: "nested plugin",
  location: import.meta.url,
  projectLocation: currentUrl.href,
  routes: [{
    path: "routeFromNestedPlugin",
    handler: (_req, ctx) => {
      return ctx.render();
    },
    component: NestedPluginComponent,
  }, {
    path: "atRouteFromNestedPlugin",
    handler: (_req, ctx) => {
      return ctx.render();
    },
    component: AtPluginComponent,
  }],
} satisfies Plugin;
