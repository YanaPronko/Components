import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITransformedCharacters } from '../components/pages/Main';
import { ITransformedChar } from '../components/singleChar/SingleChar';
import { ICharacter, IResponse, IResponseData } from '../models/ICharacters';

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
    fetchAllChars: build.query<ITransformedCharacters[], string>({
      query: (params) => ({
        url: `/characters${params}`,
      }),

      transformResponse: (response: { data: IResponseData }) =>
        response.data.results.map(transformCharactersData),
      providesTags: () => ['Chars'],
    }),
    fetchChar: build.query<ITransformedChar, number>({
      query: (params) => ({
        url: `/characters/${params}?apikey=3bc0075bdf9cab04a01fcd1a7e7d1b84`,
      }),
      transformResponse: (response: IResponse) => transformCharacterData(response.data.results[0]),
      providesTags: () => ['Char'],
    }),
  }),
});
export const { useFetchAllCharsQuery, useFetchCharQuery } = marvelService;
