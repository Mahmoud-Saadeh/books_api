import React, { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import { Link, useLocation } from 'react-router-dom';

import './NavBar.scss';

export const NavBar = () => {
  const location = useLocation();

  const [navColor, setNavColor] = useState();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setNavColor(window.pageYOffset > 50)
      );
    }
  }, []);

  // const listenScrollEvent = (e) => {
  //   console.log(window.scrollY);
  //   if (window.scrollY > 100) {
  //     setNavColor({
  //       color: '#e7e7e7',
  //       shadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  //     });
  //   }
  //   // else {
  //   //     setNavColor({ color: 'transparent', shadow: 'transparent 0px 5px 15px' });
  //   //   }
  // };

  // window.addEventListener('scroll', listenScrollEvent);

  console.log(location.pathname);
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
