import React, { useContext } from 'react';
import { ThemeContext } from '../helpers/ThemeProvider';
import githubDark from '../assets/github-dark.svg';
import githubLight from '../assets/github-light.svg';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  /* eslint-disable */
  return (
    <>
      <footer className={`footer ${theme}`}>
        <a href="https://github.com/Lambtsa/todo-app-react">
          <img className="footer__img" src={theme === 'dark' ? githubLight : githubDark} alt={`Github logo ${theme}`} />
        </a>
      </footer>
    </>
  );
};

export default Footer;
