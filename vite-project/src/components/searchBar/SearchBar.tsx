import { ChangeEvent, useEffect, useRef, useState } from 'react';
import './searchBar.scss';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');

  const inputValueRef = useRef(inputValue);

  useEffect(() => {
    inputValueRef.current = inputValue;
  }, [inputValue]);

  useEffect(() => {
    const savedInputValue = localStorage.getItem('inputValue');
    if (savedInputValue) setInputValue(savedInputValue);

    return () => localStorage.setItem('inputValue', `${inputValueRef.current}`);
  }, []);

  const onUpdateSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

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
