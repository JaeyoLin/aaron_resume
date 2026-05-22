import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import Portfolio from './Portfolio.jsx';

test('renders the portfolio route', () => {
  render(
    <MemoryRouter initialEntries={['/portfolio']}>
      <Portfolio />
    </MemoryRouter>,
  );

  expect(screen.getByText('Selected Work')).toBeInTheDocument();
  expect(screen.getByText('Bank of Kaohsiung')).toBeInTheDocument();
});
