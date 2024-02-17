import { IS_BROWSER } from "$fresh/runtime.ts";
import Component from "../components/Component.tsx";

export default function Island() {
  console.log("island: " + IS_BROWSER);
  return (
    <div id="island">
      Hello from an island. IS_BROWSER: {IS_BROWSER === true ? "true" : "false"}
      <Component />
    </div>
  );
}
