import { ChangeEvent, Component } from 'react';
import './searchBar.scss';

class SearchBar extends Component {
  state = {
    value: localStorage.getItem('inputValue') || '',
  };

  onUpdateSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    this.setState({ value });
  };

  componentWillUnmount() {
    localStorage.setItem('inputValue', `${this.state.value}`);
  }

  render() {
    return (
      <>
        <input
          className="search__bar"
          type="text"
          placeholder="Search ..."
          value={this.state.value}
          onChange={this.onUpdateSearch}
        />
      </>
    );
  }
}
export default SearchBar;
