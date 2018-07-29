import React, { Component } from 'react';
import styles from '../styles/Header.scss';

export default class Header extends Component {
	render() {
		return (
			<header className={styles.container}>
				<a className={styles.home} href="/">Home</a>
				<nav className={styles.nav}>
					<a href="#profile">Profile</a>
					<a href="#resume">Resume</a>
					<a href="#works">Works</a>
				</nav>
			</header>
		);
	}
}
