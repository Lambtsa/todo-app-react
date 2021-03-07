import React, { useContext } from 'react';
import './SwitchToggle.scss';
import { ThemeContext } from '../../helpers/ThemeProvider';

const SwitchToggle = () => {
  const { theme, handleThemeToggle } = useContext(ThemeContext);

  /* eslint-disable */
  return (
    <>
      <form type="submit" className="switch">
        <input
          type="checkbox"
          className="switch-checkbox"
          onChange={handleThemeToggle}
          name="themeToggle"
          id="themeToggle"
          checked={theme === 'dark'} />
        <label className="switch-label" htmlFor="themeToggle">
          <span className="switch-inner" />
          <span className="switch-switch" />
        </label>
      </form>
    </>
  );
};

export default SwitchToggle;
