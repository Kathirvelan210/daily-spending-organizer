import { render, screen } from '@testing-library/react';
import App from './App';

test('renders daily spending organizer', () => {
  render(<App />);
  const headerElement = screen.getByText(/Daily Spending Organizer/i);
  expect(headerElement).toBeInTheDocument();
});
