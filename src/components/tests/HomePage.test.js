import React from 'react';
import { render } from '@testing-library/react';
import HomePage from '../HomePage';

test('Calculator component matches snapshot', () => {
  const { asFragment } = render(<HomePage />);
  expect(asFragment()).toMatchSnapshot();
});
