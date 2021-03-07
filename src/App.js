import React from 'react';
import './styles.scss';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { ThemeProvider } from './helpers/ThemeProvider';

const App = () => (
  <ThemeProvider>
    <Header />
    <Main />
    <Footer />
  </ThemeProvider>
);

export default App;
