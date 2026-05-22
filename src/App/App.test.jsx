import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import App from './App.jsx';

test('renders the resume route', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>,
  );

  expect(screen.getByText('Aaron Lin')).toBeInTheDocument();
  expect(screen.getByText('Work History')).toBeInTheDocument();
});
