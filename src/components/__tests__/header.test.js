import { fireEvent, render, screen } from '@testing-library/react';
import Header from '../Header';
import { BrowserRouter } from 'react-router';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';

jest.mock('../logo.png', () => 'mock-image-path');

it('should load the header items', () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  const cart = screen.getByText('Cart(0)🛒');

  expect(cart).toBeInTheDocument();
});

it('Should check the functionality of the login/logout button', () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  const loginBtn = screen.getByText('login');
  expect(loginBtn).toBeInTheDocument();

  fireEvent.click(loginBtn);

  const logoutBtn = screen.getByText('logout');
  expect(logoutBtn).toBeInTheDocument();

  fireEvent.click(logoutBtn);

  const finalBtnValue = screen.getByText('login');
  expect(finalBtnValue).toBeInTheDocument();
});
