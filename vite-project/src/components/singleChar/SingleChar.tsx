import { FC } from 'react';
import { useFetchCharQuery } from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import './singleChar.scss';

export interface ITransformedChar {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  episodes: number | null;
  duration: string | null;
  season: string | null;
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
  const { name, description, thumbnail, episodes, duration, season } =
    singleChar as ITransformedChar;
  return (
    <div className="single-char__basics">
      <img src={thumbnail} alt={name} />
      <div className="single-char__info-name">{name}</div>
      <div className="single-char__btns">
        <div>Episodes: {episodes}</div>
        <div>Duration: {duration}</div>
        <div>Season: {season}</div>
      </div>
      <div className="single-char__descr">{description}</div>
    </div>
  );
};

export default SingleChar;
