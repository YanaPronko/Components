import { ChangeEvent, Component } from 'react';
import './searchBar.scss';

class SearchBar extends Component {
  state = {
    value: localStorage.getItem('inputValue') || '',
  };

  // componentDidMount() {
  //   const storageValue = localStorage.getItem('inputValue');
  //   // this.setState({ value: storageValue });
  // }

  /*   componentWillUnmount() {
    localStorage.setItem('inputValue', `${this.state.value}`);
  } */

  onUpdateSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    localStorage.setItem('inputValue', `${value}`);
    this.setState({ value });
  };

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
