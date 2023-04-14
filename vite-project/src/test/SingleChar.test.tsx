import { describe, it, vi } from 'vitest';
import MarvelAPI from '../services/MarvelAPI';

const mockResponce = {
  status: 'Ok',
  data: {
    results: [
      {
        id: 1009258,
        name: 'Dagger',
        description: '',
        modified: '2013-11-20T17:06:21-0500',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/8/e0/528d31c9eac10',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009258',
        comics: {
          available: 124,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009258/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/77063',
              name: 'Absolute Carnage: Lethal Protectors (2019) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/35501',
              name: 'Amazing Spider-Man (1999) #663',
            },
          ],
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/characters/495/dagger?utm_campaign=apiRef&utm_source=c048386abb58b271f0b7c7a1ac83ff8d',
          },
          {
            type: 'wiki',
            url: 'http://marvel.com/universe/Dagger?utm_campaign=apiRef&utm_source=c048386abb58b271f0b7c7a1ac83ff8d',
          },
        ],
      },
    ],
  },
};

const transformedData = {
  id: 1009258,
  name: 'Dagger',
  description: "Description didn't find",
  thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/8/e0/528d31c9eac10.jpg',
  homepage:
    'http://marvel.com/characters/495/dagger?utm_campaign=apiRef&utm_source=c048386abb58b271f0b7c7a1ac83ff8d',
  wiki: 'http://marvel.com/universe/Dagger?utm_campaign=apiRef&utm_source=c048386abb58b271f0b7c7a1ac83ff8d',
  comics: [
    {
      resourceURI: 'http://gateway.marvel.com/v1/public/comics/77063',
      name: 'Absolute Carnage: Lethal Protectors (2019) #3',
    },
    {
      resourceURI: 'http://gateway.marvel.com/v1/public/comics/35501',
      name: 'Amazing Spider-Man (1999) #663',
    },
  ],
};

describe('Single char component', () => {
  beforeEach(() => {
    global.fetch = vi.fn(
      () =>
        Promise.resolve({
          json: () => Promise.resolve(mockResponce),
        })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ) as any;
  });

  it('should call mock request', async () => {
    const id = 1009258;
    const marvelAPI = new MarvelAPI();

    const character = await marvelAPI.getCharacter(id);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(character).toEqual(transformedData);
  });
});
