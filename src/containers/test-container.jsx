import React, { Component } from 'react';
import { connect } from 'react-redux';

class Test extends Component {

	constructor(props) {
		super(props);

		this.renderList = this.renderList.bind(this);
	}

	render() {
		return (
			<ul>
				{this.renderList()}
			</ul>
		);
	}

	renderList() {
		return this.props.tests.map(test => {
			return (
				<li key={test.title}>
					{test.title}
				</li>
			);
		});
	}
}

export default connect(({ test }) => ({
	tests: test
}))(Test);
