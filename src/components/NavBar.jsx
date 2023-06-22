import '../styles/navbar.css';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function NavBar() {
  const location = useLocation();

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img className="logo-img" src="/resources/planet.png" alt="" />
          <h2>Space Travelers Hub</h2>
        </div>
        <div className="navlinks">
          <ul>
            <li className={location.pathname === '/' ? 'active' : ''}>
              <NavLink to="/" className="links-desktop">
                Rockets
              </NavLink>
            </li>

            <li className={location.pathname === '/missions' ? 'active' : ''}>
              <NavLink to="/missions" className="links-desktop">
                Missions
              </NavLink>
            </li>

            <li className={location.pathname === '/my-profile' ? 'active' : ''}>
              <NavLink to="/my-profile" className="links-desktop">
                My Profile
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
