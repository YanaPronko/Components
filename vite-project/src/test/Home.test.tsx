import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Home } from '../components/pages';

describe('Home page', () => {
  it('Renders About us', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('About us');
  });
});
