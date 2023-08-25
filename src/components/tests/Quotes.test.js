import React from 'react';
import { render } from '@testing-library/react';
import Quotes from '../Quotes';

test('Quotes component matches snapshot', () => {
  const { asFragment } = render(<Quotes />);
  expect(asFragment()).toMatchSnapshot();
});
