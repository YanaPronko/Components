import { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
  render() {
    return (
      <>
        <h1>404</h1>
        <h2>Not Found</h2>
        <Link to="/">GO HOME</Link>
      </>
    );
  }
}

export default NotFound;
