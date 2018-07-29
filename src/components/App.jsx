import React, { Component } from 'react';
import styles from '../styles/App.scss';
import TestContainer from '../containers/test-container.jsx';

export default class App extends Component {
	render() {
		return (
			<div className={styles.root}>
				<div className={styles.header}>
					<h2>Hrafnkell Baldursson portfolio</h2>
				</div>
				<TestContainer />
			</div>
		);
	}
}
