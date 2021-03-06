import React, { useContext } from 'react';
import { ThemeContext } from '../helpers/ThemeProvider';
import ToggleSwitch from './ToggleSwitch';

const Header = () => {
  const { theme, handleThemeToggle } = useContext(ThemeContext);
  return (
    <>
      <header className={`header ${theme}`}>
        <nav className="header__container">
          <h1 className="header__title">title</h1>
          <button onClick={handleThemeToggle} className="header__btn" type="button">button</button>
          <ToggleSwitch />
        </nav>
      </header>
    </>
  );
};

export default Header;
