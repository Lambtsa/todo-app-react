import React, { useContext } from 'react';
import { ThemeContext } from '../helpers/ThemeProvider';
import ToggleSwitch from './SwitchToggle/SwitchToggle';
import logo from '../assets/tom-lamb.svg';

const Header = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <header className={`header ${theme}`}>
        <nav className="header__container">
          <img className="header__img" src={logo} alt="Tom Lamb logo lettering" />
          <h1 className="header__title">Task list</h1>
          <ToggleSwitch />
        </nav>
      </header>
    </>
  );
};

export default Header;
