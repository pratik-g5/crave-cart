import { render, screen } from '@testing-library/react';
import Contact from '../Contact';
import '@testing-library/jest-dom';

test('Should display a submit button', () => {
  render(<Contact />);

  const button = screen.getByRole('button');

  expect(button).toBeInTheDocument();
});

test('Should have 2 input fields', () => {
  render(<Contact />);

  const inputFields = screen.getAllByRole('textbox');
  console.log(inputFields);
  expect(inputFields.length).toBe(2);
});
