import React, { Component } from 'react';
import { Container } from 'reactstrap';

require('./styles.scss');

export default class App extends Component {
  render () {
    return (
      <Container fluid>
        {this.props.children}
      </Container>
    );
  }
}

