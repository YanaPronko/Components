import { useEffect, useState } from 'react';
import CharactersList from '../charactersList/CharactersList';
import SearchBar from '../searchBar/SearchBar';
import MarvelAPI from '../../services/MarvelAPI';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import Modal from '../modal/Modal';
import SingleChar from '../singleChar/SingleChar';

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
  const [search, setSearch] = useState(localStorage.getItem('inputValue') || '');
  const [error, setError] = useState(false);
  const [selectedCharID, setSelectedCharID] = useState<number>(0);
  const [isActiveModal, setActiveModal] = useState(false);

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
      <ErrorBoundary>
        <SearchBar setSearch={setSearch} />
        <CharactersList
          characters={characters}
          error={error}
          isLoading={isLoading}
          setSelectedCharID={setSelectedCharID}
          setActiveModal={setActiveModal}
        />
        {isActiveModal && (
          <Modal isActiveModal={isActiveModal} setActiveModal={setActiveModal}>
            <SingleChar selectedCharID={selectedCharID} />
          </Modal>
        )}
      </ErrorBoundary>
    </div>
  );
};

export default Main;
