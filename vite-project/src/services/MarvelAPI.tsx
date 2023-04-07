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

class MarvelAPI {
  baseUrl = 'https://gateway.marvel.com:443/v1/public/';
  apiKey = 'apikey=3bc0075bdf9cab04a01fcd1a7e7d1b84';
  offset = 510;
  // search = 'sp';

  getAllCharacters = async (offset = this.offset, search: string) => {
    const urlWithSearch = `${this.baseUrl}characters?nameStartsWith=${search}&${this.apiKey}`;
    const baseURL = `${this.baseUrl}characters?&offset=${offset}&${this.apiKey}`;
    const url = search === '' ? baseURL : urlWithSearch;
    const response = await fetch(url);
    // `${this.baseUrl}characters?nameStartsWith=${search}&offset=${offset}&${this.apiKey}`
    if (!response.ok) {
      throw new Error(`Couldn't fetch ${this.baseUrl} with status ${response.status}`);
    }
    const result = await response.json();
    console.log(result);
    return result.data.results.map(transformCharactersData);
  };
}

export default MarvelAPI;
