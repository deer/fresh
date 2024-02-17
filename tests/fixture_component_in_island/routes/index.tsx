import { IS_BROWSER } from "$fresh/runtime.ts";
import Island from "../islands/Island.tsx";

export default function Home() {
  console.log("index: " + IS_BROWSER);
  return (
    <div id="index">
      Hello from the index. IS_BROWSER: {IS_BROWSER === true ? "true" : "false"}
      <Island />
    </div>
  );
}
