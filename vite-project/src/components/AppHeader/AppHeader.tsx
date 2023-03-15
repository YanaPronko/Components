import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './appHeader.scss';

class AppHeader extends Component {
  pathName =
    window.location.pathname === '/' ? 'ABOUT' : window.location.pathname.slice(1).toUpperCase();
  state = {
    pathName: this.pathName,
  };

  handleLinkClick = () => {
    this.setState(this.pathName);
  };

  render() {
    return (
      <header className="header">
        <h1 className="page__title">{this.state.pathName}</h1>
        <nav className="menu">
          <ul className="menu-list">
            <li className="list-item">
              <NavLink
                end
                className="menu-link"
                style={({ isActive }) => ({ color: isActive ? '#9F0013' : '#000000' })}
                to="/"
                onClick={this.handleLinkClick}
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
                onClick={this.handleLinkClick}
              >
                Main
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
export default AppHeader;
