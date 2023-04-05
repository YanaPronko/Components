import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppHeader from '../components/appHeader/AppHeader';

describe('Header component', () => {
  it('show Main header', () => {
    render(
      <MemoryRouter>
        <AppHeader />
      </MemoryRouter>
    );

    expect(screen.getByText(/Main/i)).toBeDefined();
  });

  it('show About us header', () => {
    render(
      <MemoryRouter>
        <AppHeader />
      </MemoryRouter>
    );
    expect(screen.getByText(/About us/i)).toBeDefined();
  });
  it('show Form header', () => {
    render(
      <MemoryRouter>
        <AppHeader />
      </MemoryRouter>
    );
    expect(screen.getByText(/Form/i)).toBeDefined();
  });
  it('show Not found header', () => {
    const invalidPath = '/badPath';
    render(
      <MemoryRouter initialEntries={[invalidPath]}>
        <AppHeader />
      </MemoryRouter>
    );
    expect(screen.getByText(/badPath/i)).toBeDefined();
  });
});
