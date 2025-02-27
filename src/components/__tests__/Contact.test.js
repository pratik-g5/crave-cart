import { fireEvent, render, screen } from '@testing-library/react';
import Contact from '../Contact';
import '@testing-library/jest-dom';

test('Should display a submit button', () => {
  render(<Contact />);

  const button = screen.getByRole('button', { name: 'Submit' });

  expect(button).toBeInTheDocument();
});

test('Should have 2 input fields', () => {
  render(<Contact />);

  const inputFields = screen.getAllByRole('textbox');
  // console.log(inputFields);
  expect(inputFields.length).toBe(3);
});

it('Should take the input of name, contact, message', () => {
  render(<Contact />);

  const nameInput = screen.getByPlaceholderText('Name');
  fireEvent.change(nameInput, { target: { value: 'Pratik' } });

  const contactInput = screen.getByPlaceholderText('Contact');
  fireEvent.change(contactInput, { target: { value: '8152950952' } });

  const messageInput = screen.getByPlaceholderText('Message');
  fireEvent.change(messageInput, {
    target: { value: 'Hello, This is Pratik' },
  });

  const button = screen.getByRole('button', { name: 'Submit' });
  fireEvent.click(button);

  expect(nameInput.value).toBe('');
  expect(contactInput.value).toBe('');
  expect(messageInput.value).toBe('');
});
