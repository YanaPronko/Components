interface ICharacter {
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

class MarvelAPI {
  baseUrl = 'https://gateway.marvel.com:443/v1/public/';
  apiKey = '3bc0075bdf9cab04a01fcd1a7e7d1b84';
  offset = 510;

  getAllCharacters = async (offset = this.offset) => {
    const response = await fetch(
      `${this.baseUrl}characters?offset=${offset}&apikey=${this.apiKey}`
    );
    if (!response.ok) {
      throw new Error(`Couldn't fetch ${this.baseUrl} with status ${response.status}`);
    }
    const result = await response.json();
    return result.data.results.map(this.transformCharactersData);
  };

  transformCharactersData = (character: ICharacter) => {
    return {
      id: character.id,
      name: character.name,
      thumbnail: character.thumbnail.path + '.' + character.thumbnail.extension,
      description: character.description
        ? `${character.description.slice(0, 200)}...`
        : 'There is no description',
    };
  };
}

export default MarvelAPI;
