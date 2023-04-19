import { describe, it } from 'vitest';
import { render, screen } from './tests';
import SearchBar from '../components/searchBar/SearchBar';

describe('Render', () => {
  it('render', () => {
    render(<SearchBar />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });
});
