import { Component } from 'react';
import CharactersList from '../charactersList/CharactersList';
import SearchBar from '../searchBar/SearchBar';
import MarvelAPI from '../../services/MarvelAPI';

export interface ITransformedCharacters {
  id: number;
  name: string;
  thumbnail: string;
  description: string;
}
interface IState {
  characters: ITransformedCharacters[] | [];
  itemsLoading: boolean;
  error: boolean;
  offset: number;
}

class Main extends Component<Record<string, never>, IState> {
  state = {
    characters: [],
    itemsLoading: true,
    error: false,
    offset: 510,
  };

  onItemsLoaded = (items: ITransformedCharacters[]) => {
    this.setState(({ characters }) => ({
      characters: [...characters, ...items],
    }));
  };

  onError = () => {
    this.setState({ error: true });
  };

  marvelAPI = new MarvelAPI();
  componentDidMount() {
    this.marvelAPI.getAllCharacters(this.state.offset).then(this.onItemsLoaded).catch(this.onError);
  }

  render() {
    return (
      <div className="wrapper">
        <SearchBar />
        <CharactersList characters={this.state.characters} />
      </div>
    );
  }
}

export default Main;
