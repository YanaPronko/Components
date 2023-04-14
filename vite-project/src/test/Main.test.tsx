import { describe, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Main } from '../components/pages';
import MarvelAPI from '../services/MarvelAPI';

const mockResponce = {
  status: 'Ok',
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

const transformedData = [
  {
    id: 1011334,
    name: '3-D Man',
    thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg',
    description: 'There is no description',
  },
];

describe('Main page', () => {
  beforeEach(() => {
    global.fetch = vi.fn(
      () =>
        Promise.resolve({
          json: () => Promise.resolve(mockResponce),
        })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ) as any;
  });

  it('renders Main component', () => {
    render(<Main />);
  });
  it('make a get request for API', async () => {
    const offset = 510;
    const search = '';
    const marvelAPI = new MarvelAPI();

    const characters = await marvelAPI.getAllCharacters(offset, search);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(characters.length).toBe(1);
    expect(characters).toEqual(transformedData);
  });
});
