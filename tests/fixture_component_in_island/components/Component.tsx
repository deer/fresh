import { IS_BROWSER } from "$fresh/runtime.ts";

export default function Component() {
  console.log("component: " + IS_BROWSER);
  return (
    <div id="component">
      Hello from a component. IS_BROWSER: {IS_BROWSER === true ? "true" : "false"}
    </div>
  );
}
