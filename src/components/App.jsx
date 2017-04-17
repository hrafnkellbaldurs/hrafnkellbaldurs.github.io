import React, { Component } from 'react';
import styles from '../styles/App.scss';

export default class App extends Component {
  render() {
    return (
      <div className={ styles.appContainer + ' .pinktext' }>
        Hello I'm app 2
      </div>
    );
  }
}