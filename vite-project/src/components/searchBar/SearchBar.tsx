import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import './searchBar.scss';

type Props = {
  setSearch: (val: string) => void;
};

const SearchBar: FC<Props> = ({ setSearch }) => {
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
    setSearch(value);
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
