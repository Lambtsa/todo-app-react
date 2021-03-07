import React, { useContext } from 'react';
import { ThemeContext } from '../helpers/ThemeProvider';
import ToggleSwitch from './SwitchToggle/SwitchToggle';

const Header = () => {
  const { theme, handleThemeToggle } = useContext(ThemeContext);
  return (
    <>
      <header className={`header ${theme}`}>
        <nav className="header__container">
          <h1 className="header__title">title</h1>
          <ToggleSwitch onClick={handleThemeToggle} />
        </nav>
      </header>
    </>
  );
};

export default Header;
