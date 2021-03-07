import { render, screen, } from '@testing-library/react';
import { ThemeProvider } from './helpers/ThemeProvider';
import App from './App';
import { taskColorGenerator, createTaskItem, findHighestId } from './helpers/helpers';
import Header from './components/Header';
import Main from './components/Main';
import Form from './components/Form';
import Task from './components/Task';
import Footer from './components/Footer';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  window.localStorage.setItem('tasks', JSON.stringify([]));
})

describe('The helper functions', () => {
  const mockTasks = [{
    id: 1,
    color: 'hsl(36, 60%, 70%)',
    content: {
    title: "Call mom",
    description: "Call mom on Sunday the 7th March",
    },
  },
  {
    id: 10,
    color: 'hsl(0, 60%, 70%)',
    content: {
    title: "Finish weekend test",
    description: "finish the weekend test on react apps",
    },
  },
  {
    id: 13,
    color: 'hsl(108, 60%, 70%)',
    content: {
    title: "Pay bills",
    description: "Give money to a load of companies",
    },
  }];
  test('The taskColorGenerator should return a hue colour', () => {
    expect(taskColorGenerator(1)).toBe('hsl(36, 60%, 70%)');
    expect(taskColorGenerator(13)).toBe('hsl(108, 60%, 70%)');
    expect(taskColorGenerator(10)).toBe('hsl(0, 60%, 70%)');
  });
  test('The createTaskItem should return a task object', () => {
    expect(createTaskItem(1, "Call mom", 'Call mom on Sunday the 7th March')).toStrictEqual(mockTasks[0]);
  });
  test('The findHighestId should return highest number given an array of tasks', () => {
    expect(findHighestId(mockTasks)).toBe(13);
    expect(findHighestId([])).toBe(0);
  })
})

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
  test('toggles the theme between light and dark', () => {
    render(<ThemeProvider><Header /></ThemeProvider>);
    const header = screen.getByRole('banner');
    const switchCheckbox = screen.getByRole('checkbox');
    userEvent.click(switchCheckbox);
    expect(header).toHaveClass('header dark');
    userEvent.click(switchCheckbox);
    expect(header).toHaveClass('header light');
  })
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
    const link = screen.getByRole('link');
    expect(footer).toBeInTheDocument();
    expect(svgImg).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  });
  test('renders a link to github page', () => {
    render(<ThemeProvider><Footer /></ThemeProvider>);
    const link = screen.getByRole('link');
    const svgImg = screen.getByRole('img');
    expect(link).toHaveAttribute('href', 'https://github.com/Lambtsa/todo-app-react');
    expect(svgImg).toHaveAttribute('alt', 'Github logo light')
    expect(svgImg).toHaveAttribute('src', 'github-dark.svg')
  })
});

describe('The Main component', () => {
  test('renders the Main component wrapper', () => {
    render(<ThemeProvider><Main /></ThemeProvider>);
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });
  test('renders the Main component wrapper in the App', () => {
    render(<App />);
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });
  test('renders 2 sections inside the Main component', () => {
    render(<ThemeProvider><Main /></ThemeProvider>);
    const sections = screen.getAllByRole('contentinfo');
    expect(sections).toHaveLength(2);
  });
});

describe('The Form component', () => {
  test('renders a section, a header, a form, 2 inputs and a button', () => {
    render(<ThemeProvider><Form /></ThemeProvider>);
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
  test('renders a list item with data', () => {
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
  test('renders a list item after form submit', () => {
    render(<ThemeProvider><Main /></ThemeProvider>);
    const button = screen.getByRole('button');
    const titleField = screen.getByPlaceholderText('Task name');
    expect(button).toBeInTheDocument();
    expect(titleField).toBeInTheDocument();
    userEvent.paste(titleField, 'test');
    userEvent.click(button);
    const taskList = screen.getByRole('list');
    const newTaskItem = taskList.querySelector('.listItem__title');
    expect(newTaskItem).toBeInTheDocument()
  });
  test('show error message if title field is empty on submit', () => {
    render(<ThemeProvider><Main /></ThemeProvider>);
    const button = screen.getByRole('button');
    const titleField = screen.getByPlaceholderText('Task name');
    expect(button).toBeInTheDocument();
    expect(titleField).toBeInTheDocument();
    userEvent.click(button);
    const errorMessage = screen.getByText(/(Please enter a title for your task.)/i);
    expect(errorMessage).toBeInTheDocument()
  });
});
