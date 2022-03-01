import App from './App';
import React from 'react';
import { render } from '@testing-library/react';

test('renders learn react link', () => {
  const app = render(<App />);

  expect(app).toMatchSnapshot();
});
