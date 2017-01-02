import React, { Component } from 'react';
import { Container } from 'reactstrap';

require ('./styles.scss');


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container fluid>
        {this.props.children}
      </Container>
    );
  }
}



