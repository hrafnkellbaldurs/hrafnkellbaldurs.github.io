import React, { Component } from 'react';
import styles from '../styles/Section.scss';
import classNames from 'classnames';

export default class Section extends Component {
	render() {
		const containerClasses = classNames({
			'Section': true,
			[ styles.container ]: true
		});

		return (
			<div id={this.props.id} className={containerClasses}>

			</div>
		);
	}
}
