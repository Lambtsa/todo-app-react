import React, { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.theme ? JSON.parse(localStorage.theme) : 'light');

  useEffect(() => {
    localStorage.theme = JSON.stringify(theme);
  }, [theme]);

  const handleThemeToggle = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const toggle = {
    theme,
    handleThemeToggle,
  };

  return (
    <ThemeContext.Provider value={toggle}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
