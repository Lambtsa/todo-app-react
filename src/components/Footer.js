import React, { useContext } from 'react';
import { ThemeContext } from '../helpers/ThemeProvider';

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <footer className={`footer ${theme}`}>
        <p>©2021 Tom Lamb. All rights reserved</p>
      </footer>
    </>
  );
};

export default Footer;
