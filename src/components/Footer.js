import React from 'react';
import { Link } from 'react-router-dom';

import MailIcon from '@material-ui/icons/Mail';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import HomeIcon from '@material-ui/icons/Home';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import './Footer.scss';

export const Footer = () => {
  return (
    <footer>
      <div className="footer-info">
        <h3>
          <Link to="/">
            Books <span>API</span>
          </Link>
        </h3>

        <div>
          <p>
            <PhoneAndroidIcon /> <span> +962787173305</span>
          </p>
          <p>
            <MailIcon /> <span> Mahmoud.saadeh998@gmail.com</span>
          </p>
          <p>
            <HomeIcon /> <span> Jordan-Amman-Jabal Altaj</span>
          </p>

          <ul>
            <li>
              <a href="https://github.com/Mahmoud-Saadeh">
                <GitHubIcon />{' '}
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/mahmoud-saadeh/">
                <LinkedInIcon />{' '}
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/EngMahmoudSaadeh">
                <FacebookIcon />{' '}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr></hr>
      <p>All Rights reserved &copy; Book API | Mahmoud Saadeh</p>
    </footer>
  );
};
