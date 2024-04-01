import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';

const SearchBox = () => {
  let [keyword, setKeyword] = useState('');
  let dispatch = useDispatch();
  let { contact } = useSelector((state) => state);
  const searchName = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_NAME", payload: { keyword } });
  };
  return (
    <form onSubmit={searchName}>
      <div id='search-box'>
          <input type='text' placeholder='전화번호를 검색하세요' onChange={(event) => setKeyword(event.target.value)}/>
          <button type='submit'><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
      </div>
    </form>
  )
}

export default SearchBox