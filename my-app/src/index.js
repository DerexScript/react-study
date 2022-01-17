import React, { Component } from "react";
import { render } from "react-dom";
import Button from "./components/Button";

class App extends Component {
	state = {
		counter: 0,
	};

	add = () => {
		this.setState({
			counter: this.state.counter + 1,
		});
	};

	render() {
		return (
			<div>
				contador: {this.state.counter}
				<React.StrictMode>
					<Button
						press={this.add}
						title="title1"
						description="description1"
					>
						Teste1
					</Button>
				</React.StrictMode>
			</div>
		);
	}
}

render(<App />, document.getElementById("app"));
