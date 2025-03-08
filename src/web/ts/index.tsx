import { render } from "solid-js/web";
import { PlinthStyles } from "plinth-web";
import "../css/hello_world.css";

console.log("Hello World!")

function App() {
	return (
		<div class="HelloWorld">
			<h1>Hello, World! </h1>
		</div>
	);
}

render(() => <App />, document.getElementById("root") as HTMLElement);

