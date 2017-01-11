import React from 'react';

class About extends React.Component {
  componentDidMount () {
    console.log('Hello there...this line is not touched');
  }

  render () {
    return (
      <div>
        <h1>Welcome to About Page</h1>
      </div>
    );
  }
}

module.exports = About;

