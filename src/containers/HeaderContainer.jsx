import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

const mapStateToProps = (state) => {
	return state;
};

export default connect(mapStateToProps)(Header);
