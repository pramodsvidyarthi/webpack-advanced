import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router';

export default () => {
  return(
    <div className="clearfix"><Row>
        <Col lg="6" md="6"><Link to="">Home</Link></Col>
        <Col lg="6" md="6"><Link to="/about">About</Link></Col>
      </Row>
      <Row>
        <Col lg="6" md="6"><Link to="/contact">Contact</Link></Col>
        <Col lg="6" md="6"><Link to="/portfolio">Portfolio</Link></Col>
      </Row>
    </div>
  );
}
