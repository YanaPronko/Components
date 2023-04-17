import { describe, it } from 'vitest';
import { render, screen } from './tests';
import { Main } from '../components/pages';

describe('Main page', () => {
  it('render Main page', () => {
    render(<Main />);
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
