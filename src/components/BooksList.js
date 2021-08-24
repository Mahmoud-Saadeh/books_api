import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { maxResults } from '../constants';
import { useDispatch } from 'react-redux';
import { fetchSearch } from '../actions/booksAction';

import Pagination from '@material-ui/lab/Pagination';
import { motion } from 'framer-motion';
import { BookItem } from './BookItem';

import './BooksList.scss';

export const BooksList = () => {
  const dispatch = useDispatch();
  // current page
  const [currentPage, setCurrentPage] = useState(1);

  // state to hold user input
  const [textInput, setTextInput] = useState('');
  const [textInputPagination, setTextInputPagination] = useState('');
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  // function to send the request and then store the response in the state manager
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput, 0));
    setTextInputPagination(textInput);
    setTextInput('');
    // reset the page to page 1
    setCurrentPage(1);
  };
  //   Get the data back from the state
  const { foundBooks } = useSelector((state) => state.books);

  //maximum page number
  const pageNumber = Math.ceil((foundBooks.totalItems || 0) / maxResults);
  //   const pageNumber = 10;

  const pageNumberHandler = (event, value) => {
    console.log(value);
    setCurrentPage(value);
    dispatch(fetchSearch(textInputPagination, (value - 1) * maxResults));
  };
  return (
    <div>
      <form className="search" onSubmit={submitSearch}>
        <input
          className="search-input"
          placeholder="Search for a book"
          value={textInput}
          onChange={inputHandler}
          type="text"
        />
        <button className="btn-search" type="submit">
          Search
        </button>
      </form>
      <motion.div className="card-list">
        {/* Check if there are data in the array */}
        {foundBooks.items &&
          foundBooks.items.length > 0 &&
          foundBooks.items.map((book) => (
            <BookItem key={book.id} book={book} />
          ))}
      </motion.div>
      <Pagination
        className="pagination"
        count={pageNumber}
        shape="rounded"
        page={currentPage}
        onChange={pageNumberHandler}
      />
    </div>
  );
};
