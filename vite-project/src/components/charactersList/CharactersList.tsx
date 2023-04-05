import ErrorMessage from '../errorMessage/ErrorMessage';
import { ITransformedCharacters } from '../pages/Main';
import Spinner from '../spinner/Spinner';

import './charactersList.scss';

interface CharactersListProps {
  characters: ITransformedCharacters[] | [];
  error: boolean;
  isLoading: boolean;
}

const CharactersList: React.FC<CharactersListProps> = ({ characters, error, isLoading }) => {
  const renderCharacters = (characters: ITransformedCharacters[]) => {
    const items = characters.map(({ id, name, description, thumbnail }) => {
      const imgStyle =
        thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
          ? 'unset'
          : 'cover';
      return (
        <li className="char__item" key={id}>
          <img src={thumbnail} alt={name} className={imgStyle} />
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
