import { FC } from 'react';
import { Items } from '../../models/ICharacters';
import { useFetchCharQuery } from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import './singleChar.scss';

export interface ITransformedChar {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  homepage: string;
  wiki: string;
  comics: Items[];
}

type Props = {
  selectedCharID: number;
};

const SingleChar: FC<Props> = ({ selectedCharID }) => {
  const { data: singleChar, isLoading, isError } = useFetchCharQuery(selectedCharID);

  return (
    <>
      {isLoading && <Spinner />}
      {isError && <ErrorMessage />}
      {!(isLoading || isError || !singleChar) ? <View singleChar={singleChar} /> : null}
    </>
  );
};

type ViewProps = {
  singleChar: ITransformedChar | null;
};

const View: FC<ViewProps> = ({ singleChar }) => {
  const { name, description, thumbnail, homepage, wiki, comics } = singleChar as ITransformedChar;

  const imgStyle =
    thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
      ? 'unset'
      : 'cover';

  return (
    <>
      <div className="single-char__basics">
        <img src={thumbnail} alt={name} className={imgStyle} />
        <div>
          <div className="single-char__info-name">{name}</div>
          <div className="single-char__btns">
            <a href={homepage} className="button button__main">
              <div className="inner">homepage</div>
            </a>
            <a href={wiki} className="button button__secondary">
              <div className="inner">Wiki</div>
            </a>
          </div>
        </div>
      </div>
      <div className="single-char__descr">{description}</div>
      <div className="single-char__comics">Comics:</div>
      {
        <ul className="single-char__comics-list">
          {comics.length > 0 ? null : 'There is no comics with this character'}
          {comics.map((item, i) => {
            if (i > 9) {
              return null;
            }
            return (
              <li key={i} className="single-char__comics-item">
                {item.name}
              </li>
            );
          })}
        </ul>
      }
    </>
  );
};

export default SingleChar;
