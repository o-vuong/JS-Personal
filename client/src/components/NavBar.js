import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ sections }) => {
  return (
    <nav>
      <ul>
        {sections.map((section, index) => (
          <li key={index}>
            <Link to={`/${section.name}`}>{section.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
