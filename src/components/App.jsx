import React, { Component } from 'react';
import styles from '../styles/App.scss';

export default class App extends Component {
  render() {
    return (
      <div className={ styles.root }>
        <div className={ styles.header }>
          <h2>Hrafnkell Baldursson portfolio website</h2>
        </div>
      </div>
    );
  }
}