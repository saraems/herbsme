import React from 'react';
import { render } from '@testing-library/react';
import HerbsMe from '../HerbsMe';

test('renders learn react link', () => {
  const { getByText } = render(<HerbsMe />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
