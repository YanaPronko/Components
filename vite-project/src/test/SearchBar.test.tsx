import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import SearchBar from '../components/searchBar/SearchBar';

describe('Render', () => {
  it('render', () => {
    render(<SearchBar setSearch={() => jest.fn()} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });
});
