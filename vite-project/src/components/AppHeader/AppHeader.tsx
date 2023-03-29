import { useEffect, useState, useCallback } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './appHeader.scss';

const AppHeader = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const getPath = useCallback(
    (pathname: string) => {
      return pathname === '/' ? 'ABOUT' : location.pathname.slice(1).toUpperCase();
    },
    [location.pathname]
  );

  const [path, setPath] = useState(getPath(pathname));

  useEffect(() => {
    setPath(getPath(pathname));
  }, [getPath, pathname]);

  return (
    <header className="header">
      {<h1 className="page__title">{path} page</h1>}
      <nav className="menu">
        <ul className="menu-list">
          <li className="list-item">
            <NavLink
              end
              className="menu-link"
              style={({ isActive }) => ({ color: isActive ? '#9F0013' : '#000000' })}
              to="/"
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
            >
              Form
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default AppHeader;
