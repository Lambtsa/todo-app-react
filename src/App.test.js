import { render, screen } from '@testing-library/react';
import App from './App';

describe('The App component', () => {
  test('renders the header', () => {
    render(<App />);
    const header = screen.getByRole('heading');
    expect(header).toBeInTheDocument();
  });
})
