import { Component } from 'react';
import CharactersList from '../charactersList/CharactersList';
import SearchBar from '../searchBar/SearchBar';

class Main extends Component {
  render() {
    return (
      <div className="wrapper">
        <SearchBar />
        <CharactersList />
      </div>
    );
  }
}

export default Main;
