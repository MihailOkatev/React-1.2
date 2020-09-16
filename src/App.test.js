import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import ShopItemFunc from "./components/ShopItemFunc";

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/399/i);
  expect(linkElement).toBeInTheDocument();
});
