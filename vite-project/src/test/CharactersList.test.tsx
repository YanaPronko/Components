import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import CharactersList from '../components/charactersList/CharactersList';
import { ICharacter } from '../services/MarvelAPI';
import { transformCharactersData } from '../services/MarvelAPI';

const mockCharacters: ICharacter[] = [
  {
    id: 1011196,
    name: 'Captain Flint',
    description: '',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
      extension: 'jpg',
    },
    comics: {
      items: [
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/21366',
          name: 'Avengers: The Initiative (2007) #14',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/24571',
          name: 'Avengers: The Initiative (2007) #14 (SPOTLIGHT VARIANT)',
        },
      ],
    },
  },
];

const transformedChars = mockCharacters.map(transformCharactersData);

describe('Transform', () => {
  it('get transform data', () => {
    expect(transformedChars.length).toBe(1);
  });
  it('get transformed description', () => {
    expect(transformedChars[0].description).toBe('There is no description');
  });
  it('check transform thumbnail', () => {
    expect(transformedChars[0].thumbnail).toBe(
      'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
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
    expect(screen.getByText('Captain Flint')).toBeInTheDocument();
  });
});
