import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICharacter } from '../models/ICharacters';

export const transformCharactersData = (character: ICharacter) => {
  return {
    id: character.id,
    name: character.name,
    thumbnail: character.thumbnail.path + '.' + character.thumbnail.extension,
    description: character.description
      ? `${character.description.slice(0, 200)}...`
      : 'There is no description',
  };
};

export const transformCharacterData = (char: ICharacter) => {
  return {
    id: char.id,
    name: char.name,
    description: char.description
      ? `${char.description.slice(0, 210)}...`
      : "Description didn't find",
    thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
    homepage: char.urls?.length ? char.urls[0].url : '',
    wiki: char.urls?.length ? char.urls[1].url : '',
    comics: char.comics?.items,
  };
};

export const marvelService = createApi({
  reducerPath: 'marvelAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://gateway.marvel.com:443/v1/public',
  }),
  tagTypes: ['Chars', 'Char'],
  endpoints: (build) => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fetchAllChars: build.query<any, string>({
      query: (params) => ({
        url: `/characters${params}`,
      }),

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      transformResponse: (response: { data: any }) =>
        response.data.results.map(transformCharactersData),
      providesTags: () => ['Chars'],
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fetchChar: build.query<any, number>({
      query: (params) => ({
        url: `/characters/${params}?apikey=3bc0075bdf9cab04a01fcd1a7e7d1b84`,
      }),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      transformResponse: (response: { data: any }) =>
        transformCharacterData(response.data.results[0]),
      providesTags: () => ['Char'],
    }),
  }),
});
export const { useFetchAllCharsQuery, useFetchCharQuery } = marvelService;
