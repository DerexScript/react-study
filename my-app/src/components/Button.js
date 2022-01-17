import React, { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {
	static defaultProps = {
		title: "title default",
		description: "description default",
	};

	static propTypes = {
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
	};

	render() {
		return (
			<div>
				{this.props.title}-{this.props.description}
				<button onClick={this.props.press}>{this.props.children}</button>
			</div>
		);
	}
}

/* outra forma de se fazer proptypes

Button.defaultProps = {
    title: 'title default',
    description: 'description default'
};

Button.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

*/

export default Button;
