import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Main } from '../components/pages';
import { ICharacter, transformCharactersData } from '../services/MarvelAPI';
import MarvelAPI from '../services/MarvelAPI';
import { ITransformedCharacters } from '../components/pages/Main';

// global.fetch = vi.fn();

const mockResponce = {
  code: 200,
  status: 'Ok',
  copyright: '© 2023 MARVEL',
  attributionText: 'Data provided by Marvel. © 2023 MARVEL',
  attributionHTML: '<a href="http://marvel.com">Data provided by Marvel. © 2023 MARVEL</a>',
  etag: '46d90a985d982da6e374b3756ad26b665b7e2803',
  data: {
    offset: 0,
    limit: 20,
    total: 1562,
    count: 20,
    results: [
      {
        id: 1011334,
        name: '3-D Man',
        description: '',
        modified: '2014-04-29T14:18:17-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
          extension: 'jpg',
        },
      },
    ],
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// function createFetchResponse(data: any) {
//   return {
//     json: () => new Promise((resolve) => Promise.resolve(data)),
//   };
// }

describe('Main page', () => {
  // beforeAll(() => {
  //   global.fetch = vi.fn();
  // });
  // global.fetch = jest.fn(() =>
  //   Promise.resolve({
  //     json: () => Promise.resolve(mockResponce),
  //   })
  // ) as jest.Mock;
  const fn = jest.fn();
  it('renders Main component', () => {
    render(<Main />);
  });
  it('make a get request for API', async () => {
    const offset = 510;
    const search = '';
    const marvelAPI = new MarvelAPI();
    render(<Main />);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // (fetch as any).mockResolvedValue(createFetchResponse(mockResponce));

    const characters = await marvelAPI.getAllCharacters(offset, search);

    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
