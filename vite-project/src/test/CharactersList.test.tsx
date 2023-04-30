import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CharactersList from '../components/charactersList/CharactersList';
import { transformCharactersData } from '../services/MarvelService';
import { mockChars } from '../components/charactersList/CharactersList.cy';

const transformedChars = mockChars.data.map(transformCharactersData);

describe('Transform', () => {
  it('get transform data', () => {
    expect(transformedChars.length).toBe(1);
  });
  it('get transformed description', () => {
    expect(transformedChars[0].description).toBe(
      'A strange piper makes following spirits a mysterious blossom.'
    );
  });
  it('check transform thumbnail', () => {
    expect(transformedChars[0].thumbnail).toBe(
      'https://cdn.myanimelist.net/images/anime/1109/132382.jpg'
    );
  });
});
describe('Render', () => {
  it('render', () => {
    render(
      <CharactersList
        characters={transformedChars}
        error={false}
        isLoading={true}
        setSelectedCharID={() => jest.fn()}
        setActiveModal={() => jest.fn()}
      />
    );
    expect(screen.getByRole('listitem')).toBeInTheDocument();
    expect(screen.getByText('Crater no Naru Ki')).toBeInTheDocument();
  });
});
