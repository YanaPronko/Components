import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './appHeader.scss';

class AppHeader extends Component {
  state = {
    pathName: this.getPathName(),
  };

  handleLinkClick = () => {
    this.setState({ pathName: this.getPathName() });
  };

  getPathName() {
    console.log(window.location.pathname);
    return window.location.pathname === '/'
      ? 'ABOUT'
      : window.location.pathname.slice(1).toUpperCase();
  }

  render() {
    return (
      <header className="header">
        {<h1 className="page__title">{this.getPathName()} page</h1>}
        <nav className="menu">
          <ul className="menu-list">
            <li className="list-item">
              <NavLink
                end
                className="menu-link"
                style={({ isActive }) => ({ color: isActive ? '#9F0013' : '#000000' })}
                to="/"
                // onClick={this.handleLinkClick}
              >
                About us
              </NavLink>
            </li>
            <li className="list-item">
              <NavLink
                end
                className="menu-link"
                style={({ isActive }) => ({ color: isActive ? '#9F0013' : '#000000' })}
                to="main"
                // onClick={this.handleLinkClick}
              >
                Main
              </NavLink>
            </li>
            <li className="list-item">
              <NavLink
                end
                className="menu-link"
                style={({ isActive }) => ({ color: isActive ? '#9F0013' : '#000000' })}
                to="form"
                // onClick={this.handleLinkClick}
              >
                Form
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
export default AppHeader;
