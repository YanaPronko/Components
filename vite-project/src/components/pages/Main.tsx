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

  const { data, isLoading, isError } = useFetchAllCharsQuery(search);
  console.log(data);
  return (
    <div className="wrapper">
      <ErrorBoundary>
        <SearchBar />
        {data && (
          <CharactersList
            characters={data}
            isLoading={isLoading}
            error={isError}
            setSelectedCharID={setSelectedCharID}
            setActiveModal={setActiveModal}
          />
        )}
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
