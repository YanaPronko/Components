import { Component } from 'react';
import { ITransformedCharacters } from '../pages/Main';
// import MarvelAPI from '../../services/MarvelAPI';

import './charactersList.scss';

// interface IState {
//   characters: ITransformedCharacters[] | [];
//   itemsLoading: boolean;
//   error: boolean;
//   offset: number;
// }

type Props = {
  characters: ITransformedCharacters[];
};

class CharactersList extends Component<Props> {
  /*  state = {
    characters: [],
    itemsLoading: true,
    error: false,
    offset: 510,
  }; */

  // marvelAPI = new MarvelAPI();

  /*   componentDidMount() {
    this.marvelAPI.getAllCharacters(this.state.offset).then(this.onItemsLoaded).catch(this.onError);
  }
 */
  /*  onItemsLoaded = (items: ITransformedCharacters[]) => {
    this.setState(({ characters }) => ({
      characters: [...characters, ...items],
    }));
  };

  onError = () => {
    this.setState({ error: true });
  }; */

  renderCharacters(characters: ITransformedCharacters[]) {
    const items = characters.map(({ id, name, description, thumbnail }) => {
      const imgStyle =
        thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
          ? 'unset'
          : 'cover';
      return (
        <li className="char__item" key={id}>
          <img src={thumbnail} alt={name} className={imgStyle} /* style={imgStyle} */ />
          <div className="char__name">{name}</div>
          <div className="char__descr">{description}</div>
        </li>
      );
    });
    return <ul className="char__grid">{items}</ul>;
  }

  render() {
    const charactersList = this.renderCharacters(this.props.characters);
    return <div className="char__list">{charactersList}</div>;
  }
}

export default CharactersList;
