import React, { Component } from 'react';
import styles from '../styles/Body.scss';
import Section from './Section';

export default class Body extends Component {
	render() {
		return (
			<div className={styles.container}>
				<Section id="profile">

				</Section>
				<Section id="resume">

				</Section>
			</div>
		);
	}
}
