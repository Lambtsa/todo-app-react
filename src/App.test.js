import { render, screen, } from '@testing-library/react';
import { ThemeProvider } from './helpers/ThemeProvider';
import App from './App';
import Header from './components/Header';
import Main from './components/Main';
import Form from './components/Form';
import Task from './components/Task';
import Footer from './components/Footer';

describe('The Header component', () => {
  test('renders title, and a checkbox toggle switch ', () => {
    render(<ThemeProvider><Header /></ThemeProvider>);
    const header = screen.getByRole('banner');
    const title = screen.getByRole('heading');
    const switchCheckbox = screen.getByRole('checkbox');
    expect(header).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(switchCheckbox).toBeInTheDocument();
  });
  test('is rendered with the right classNames', () => {
    render(<ThemeProvider><Header /></ThemeProvider>);
    const header = screen.getByRole('banner');
    const title = screen.getByRole('heading');
    const switchCheckbox = screen.getByRole('checkbox');
    expect(header).toHaveClass('header');
    expect(title).toHaveClass('header__title');
    expect(switchCheckbox).toHaveClass('switch-checkbox');
  });
  test('renders the Header component inside the App', () => {
    render(<App />);
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });
});

describe('The Footer component', () => {
  test('renders a Footer component', () => {
    render(<ThemeProvider><Footer /></ThemeProvider>);
    const footer = screen.getByRole('contentinfo');
    const svgImg = screen.getByRole('img');
    expect(footer).toBeInTheDocument();
    expect(svgImg).toBeInTheDocument();
  });
});

describe('The Main component', () => {
  test('renders the Main component wrapper', () => {
    render(<Main />);
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });
  test('renders the Main component wrapper in the App', () => {
    render(<App />);
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });
  test('renders 2 sections inside the Main component', () => {
    render(<Main />);
    const sections = screen.getAllByRole('contentinfo');
    expect(sections).toHaveLength(2);
  });
});

describe('The Form component', () => {
  test('renders a section, a header, a form, 2 inputs and a button', () => {
    render(<Form />);
    const section = screen.getByRole('contentinfo')
    const header = screen.getByRole('heading');
    const form = screen.getByRole('form');
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');
    expect(section).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    expect(form).toBeInTheDocument();
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
  });
});

describe('The Task component', () => {
  test('renders a list item', () => {
    const data = {
      id: 1,
      color: 'hsl(36, 60%, 70%)',
      content: {
        title: 'test',
        description: 'test',
      },
    }
    render(<Task details={data}/>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
