import { render } from "solid-js/web";
import "./hello_world.css";
import * as Plinth from "plinth-web";
Plinth.ApplyStyling();

console.log("Hello World!");

function App() {
	return (
		<div class="HelloWorld">
			<h1>Hello, World! </h1>
		</div>
	);
}

render(() => <App />, document.getElementById("root") as HTMLElement);

