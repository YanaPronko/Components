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
  const [search, setSearch] = useState('');

  const offset = 510;

  const onItemsLoaded = (items: ITransformedCharacters[]) => {
    setCharacters(() => [...items]);
    setIsLoading(false);
  };

  const onError = () => {
    setError(true);
    setIsLoading(false);
  };

  useEffect(() => {
    const getCharacters = () => {
      marvelAPI.getAllCharacters(offset, search).then(onItemsLoaded).catch(onError);
    };
    getCharacters();
  }, [search]);

  return (
    <div className="wrapper">
      <SearchBar setSearch={setSearch} />
      <ErrorBoundary>
        <CharactersList characters={characters} error={error} isLoading={isLoading} />
      </ErrorBoundary>
    </div>
  );
};

export default Main;
