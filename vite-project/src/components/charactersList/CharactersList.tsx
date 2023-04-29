import ErrorMessage from '../errorMessage/ErrorMessage';
import { ITransformedCharacters } from '../pages/Main';
import Spinner from '../spinner/Spinner';

import './charactersList.scss';

interface CharactersListProps {
  characters: ITransformedCharacters[];
  error: boolean;
  isLoading: boolean;
  setSelectedCharID: (id: number) => void;
  setActiveModal: (val: boolean) => void;
}

const CharactersList: React.FC<CharactersListProps> = ({
  characters,
  error,
  isLoading,
  setSelectedCharID,
  setActiveModal,
}) => {
  const renderCharacters = (characters: ITransformedCharacters[]) => {
    const items = characters.map(({ id, name, description, thumbnail }) => {
      return (
        <li
          className="char__item"
          key={id}
          onClick={() => {
            setSelectedCharID(id);
            setActiveModal(true);
          }}
        >
          <img src={thumbnail} alt={name} />
          <div className="char__name">{name}</div>
          <div className="char__descr">{description}</div>
        </li>
      );
    });
    return <ul className="char__grid">{items}</ul>;
  };

  const charactersList = renderCharacters(characters);
  return (
    <>
      {isLoading && <Spinner />}
      {error && <ErrorMessage />}
      <div className="char__list">{charactersList}</div>
    </>
  );
};

export default CharactersList;
