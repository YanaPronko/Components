export interface ICharacter {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  description: string;
  wiki?: string;
  home?: string;
  urls?: URL[];
  comics: ComicList;
}

export interface ComicList {
  items: Items[];
}

interface URL {
  type: string;
  url: string;
}

export interface Items {
  resourceURI: string;
  name: string;
}

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

class MarvelAPI {
  baseUrl = 'https://gateway.marvel.com:443/v1/public/';
  apiKey = 'apikey=3bc0075bdf9cab04a01fcd1a7e7d1b84';
  offset = 510;

  getAllCharacters = async (offset = this.offset, search: string) => {
    const urlWithSearch = `${this.baseUrl}characters?nameStartsWith=${search}&${this.apiKey}`;
    const baseURL = `${this.baseUrl}characters?&offset=${offset}&${this.apiKey}`;
    const url = search === '' ? baseURL : urlWithSearch;

    const response = await fetch(url);
    // if (!response.ok) {
    //   throw new Error(`Couldn't fetch ${this.baseUrl} with status ${response.status}`);
    // }
    const result = await response.json();
    return result.data.results.map(transformCharactersData);
  };

  getCharacter = async (id: number) => {
    const url = `${this.baseUrl}characters/${id}?${this.apiKey}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Couldn't fetch ${this.baseUrl} with status ${response.status}`);
    }
    const result = await response.json();
    return transformCharacterData(result.data.results[0]);
  };
}

export default MarvelAPI;
