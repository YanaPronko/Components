import { ChangeEvent, FC } from 'react';
import { actions, useAppDispatch, useAppSelector } from '../../reducers/SearchSlice';
import './searchBar.scss';

const SearchBar: FC = () => {
  const { searchParam } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();
  const { setSearchParams } = actions;

  const onUpdateSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setSearchParams(value));
  };

  return (
    <>
      <input
        className="search__bar"
        type="text"
        placeholder="Search ..."
        value={searchParam}
        onChange={onUpdateSearch}
      />
    </>
  );
};
export default SearchBar;
