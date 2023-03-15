import { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
  render() {
    return (
      <div className="notFound__wrap">
        <h1 className="notFound__title">404</h1>
        <h2 className="notFound__title">Not Found</h2>
        <Link className="notFound__link" to="/">
          GO HOME
        </Link>
      </div>
    );
  }
}

export default NotFound;
