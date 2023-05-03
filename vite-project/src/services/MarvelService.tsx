import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { buildCreateApi, coreModule, reactHooksModule } from '@reduxjs/toolkit/query/react';

import { ITransformedCharacters } from '../components/pages/Main';
import { ITransformedChar } from '../components/singleChar/SingleChar';
import { Anime, charsByIdResponse, charsResponse } from '../models/ICharacters';

export const transformCharactersData = (character: Anime) => {
  return {
    id: character.mal_id,
    name: character.title?.split(' ').slice(0, 2).join(' ') + '...',
    thumbnail: character.images.jpg.image_url || '',
    description: character.synopsis
      ? `${character.synopsis?.split(' ').slice(0, 15).join(' ')}...`
      : 'There is no description',
  };
};

export const transformCharacterData = (char: Anime) => {
  return {
    id: char.mal_id,
    name: char.title?.split(' ').slice(0, 2).join(' ') + '...',
    description: char.synopsis
      ? `${char.synopsis?.split(' ').slice(0, 15).join(' ')}...`
      : 'There is no description',
    thumbnail: char.images.jpg.image_url || '',
    episodes: char?.episodes,
    duration: char.duration,
    season: char.season,
  };
};

let customCreateApi = createApi;
customCreateApi = buildCreateApi(
  coreModule(),
  reactHooksModule({ unstable__sideEffectsInRender: true })
);

export const marvelService = customCreateApi({
  reducerPath: 'marvelAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.jikan.moe/v4/',
  }),
  tagTypes: ['Chars', 'Char'],
  endpoints: (build) => ({
    fetchAllChars: build.query<ITransformedCharacters[], string>({
      query: (params) => `anime?q=${params}&sfw`,
      transformResponse: (response: charsResponse) => response.data.map(transformCharactersData),
      providesTags: () => ['Chars'],
    }),
    fetchChar: build.query<ITransformedChar, number>({
      query: (params) => `anime/${params}`,
      transformResponse: (response: charsByIdResponse) => transformCharacterData(response.data),
      providesTags: () => ['Char'],
    }),
  }),
});

export const { useFetchAllCharsQuery, useFetchCharQuery } = marvelService;
