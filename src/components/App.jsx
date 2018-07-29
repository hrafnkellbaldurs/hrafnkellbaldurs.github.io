import React, { Component } from 'react';
import styles from '../styles/App.scss';
import HeaderContainer from '../containers/HeaderContainer';
import Body from './Body';
import { init } from '../scripts';

export default class App extends Component {
	componentDidMount() {
		init();
	}

	render() {
		return (
			<div className={styles.container}>
				<HeaderContainer />
				<Body />
			</div>
		);
	}
}
