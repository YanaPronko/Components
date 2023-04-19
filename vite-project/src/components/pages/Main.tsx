import { useState } from 'react';
import CharactersList from '../charactersList/CharactersList';
import SearchBar from '../searchBar/SearchBar';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import Modal from '../modal/Modal';
import SingleChar from '../singleChar/SingleChar';
import { useFetchAllCharsQuery } from '../../services/MarvelService';
import { useAppSelector } from '../../reducers/SearchSlice';

export interface ITransformedCharacters {
  id: number;
  name: string;
  thumbnail: string;
  description: string;
}

const Main = () => {
  const search = useAppSelector((state) => state.search.searchParam);
  const [selectedCharID, setSelectedCharID] = useState<number>(0);
  const [isActiveModal, setActiveModal] = useState(false);

  const getParams = (params: string) => {
    if (params === '') {
      return `?offset=510&apikey=3bc0075bdf9cab04a01fcd1a7e7d1b84`;
    } else {
      return `?nameStartsWith=${params}&apikey=3bc0075bdf9cab04a01fcd1a7e7d1b84`;
    }
  };

  const { data: chars = [], isLoading, isError } = useFetchAllCharsQuery(getParams(search));
  return (
    <div className="wrapper">
      <ErrorBoundary>
        <SearchBar />
        <CharactersList
          characters={chars}
          isLoading={isLoading}
          error={isError}
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
