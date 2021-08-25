import React, { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import { Link, useLocation } from 'react-router-dom';

import './NavBar.scss';

export const NavBar = () => {
  //to get the current endpoint
  const location = useLocation();

  const [navColor, setNavColor] = useState();

  // to change the navbar color on scroll and used useEffect to avoid infinite call for the function
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setNavColor(window.pageYOffset > 50)
      );
    }
  }, []);

  return (
    <nav
      className="nav-header"
      style={
        navColor
          ? {
              backgroundColor: '#e7e7e7',
              boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            }
          : {
              backgroundColor: 'transparent',
              boxShadow: 'transparent 0px 5px 15px',
            }
      }
    >
      <div>
        <h1>
          <Link to="/">
            Books <span>API</span>
          </Link>
        </h1>
      </div>

      <ul>
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">
            Home <HomeIcon />{' '}
          </Link>
        </li>
        <li className={location.pathname === '/search' ? 'active' : ''}>
          <Link to="/search">
            Search <SearchIcon />{' '}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
