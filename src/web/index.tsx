import * as Plinth from "plinth-web";
Plinth.ApplyStyling(); // just to get tree shaking off my back. https://en.wikipedia.org/wiki/Tree_shaking

import { render } from "solid-js/web";
import "./hello_world.css";

console.log("Hello World!");

function App() {
	return (
		<div class="HelloWorld">
			<h1>Hello, World! </h1>
		</div>
	);
}

render(() => <App />, document.getElementById("root") as HTMLElement);

