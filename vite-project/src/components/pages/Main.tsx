import { useEffect, useState } from 'react';
import CharactersList from '../charactersList/CharactersList';
import SearchBar from '../searchBar/SearchBar';
import MarvelAPI from '../../services/MarvelAPI';

export interface ITransformedCharacters {
  id: number;
  name: string;
  thumbnail: string;
  description: string;
}

const Main = () => {
  const [characters, setCharacters] = useState<ITransformedCharacters[] | []>([]);

  const [error, setError] = useState(false);

  const offset = 510;

  const onItemsLoaded = (items: ITransformedCharacters[]) => {
    setCharacters((characters: ITransformedCharacters[] | []) => [...characters, ...items]);
  };

  const onError = () => {
    setError(true);
  };

  const marvelAPI = new MarvelAPI();

  const getCharacters = () => {
    marvelAPI.getAllCharacters(offset).then(onItemsLoaded).catch(onError);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="wrapper">
      <SearchBar />
      <CharactersList characters={characters} />
    </div>
  );
};

export default Main;
