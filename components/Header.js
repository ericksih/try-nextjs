import React from 'react';
import headerStyles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WINTER </span> IS COMING!
      </h1>
    </div>
  );
};

export default Header;
