import { ChangeEvent, useEffect, useRef, useState } from 'react';
import './searchBar.scss';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');

  const inputValueRef = useRef(inputValue);

  useEffect(() => {
    setInputValue(localStorage.getItem('inputValue') || '');
    return () => localStorage.setItem('inputValue', `${inputValue}`);
  }, []);

  useEffect(() => {
    inputValueRef.current = inputValue;
    return () => localStorage.setItem('inputValue', `${inputValueRef.current}`);
  }, [inputValue]);

  const onUpdateSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };
  console.log(inputValue);

  // componentWillUnmount() {
  //   localStorage.setItem('inputValue', `${this.state.value}`);
  // }
  return (
    <>
      <input
        className="search__bar"
        type="text"
        placeholder="Search ..."
        value={inputValue}
        onChange={onUpdateSearch}
      />
    </>
  );
};
export default SearchBar;
