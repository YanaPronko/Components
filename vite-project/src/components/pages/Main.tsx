import { useCallback, useEffect, useState } from 'react';
import CharactersList from '../charactersList/CharactersList';
import SearchBar from '../searchBar/SearchBar';
import MarvelAPI from '../../services/MarvelAPI';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

export interface ITransformedCharacters {
  id: number;
  name: string;
  thumbnail: string;
  description: string;
}
const marvelAPI = new MarvelAPI();

const Main = () => {
  const [characters, setCharacters] = useState<ITransformedCharacters[] | []>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const offset = 510;

  const onItemsLoaded = (items: ITransformedCharacters[]) => {
    setCharacters((characters: ITransformedCharacters[] | []) => [...characters, ...items]);
    setIsLoading(false);
  };

  const onError = () => {
    setError(true);
    setIsLoading(false);
  };

  const getCharacters = useCallback(() => {
    marvelAPI.getAllCharacters(offset).then(onItemsLoaded).catch(onError);
  }, []);

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  return (
    <div className="wrapper">
      <SearchBar />
      <ErrorBoundary>
        <CharactersList characters={characters} error={error} isLoading={isLoading} />
      </ErrorBoundary>
    </div>
  );
};

export default Main;
