import * as Plinth from "plinth-web";
Plinth.ApplyStyling(); // just to get tree shaking off my back. https://en.wikipedia.org/wiki/Tree_shaking

import { render } from "solid-js/web";
import "./hello_world.css";

console.log("Hello World!");

function waitForWasmBindings(callback: () => void, interval: number = 50, timeout: number = 5000): void {
    const start = Date.now();

    const check = () => {
        if ((window as any).wasmBindings) {
            callback();
        } else if (Date.now() - start < timeout) {
            setTimeout(check, interval);
        } else {
            console.error("Timeout: wasmBindings not found");
        }
    };

    check();
}


waitForWasmBindings(() => {

window.wasmBindings.print_from_rust("Wasm loaded, bindgen working!");
});

function App() {
	return (
		<div class="HelloWorld">
			<h1>Hello, World! </h1>
		</div>
	);
}

render(() => <App />, document.getElementById("root") as HTMLElement);

