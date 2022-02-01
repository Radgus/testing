import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders label', () => {
  render(<App />);
  const exampleInput = screen.getByLabelText(/Example/i)
  expect(exampleInput).toBeInTheDocument();
});
