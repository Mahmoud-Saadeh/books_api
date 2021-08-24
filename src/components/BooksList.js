import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { maxResults } from '../constants';
import { useDispatch } from 'react-redux';
//ACTIONS
import { fetchSearch, sortBooks } from '../actions/booksAction';

//MATERIAL UI
import { Button, TextField } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import SearchIcon from '@material-ui/icons/Search';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

//FRAMER MOTION
import { motion } from 'framer-motion';
import { BookItem } from './BookItem';

import './BooksList.scss';

export const BooksList = () => {
  const dispatch = useDispatch();
  // current page
  const [currentPage, setCurrentPage] = useState(1);
  const [foundBooksState, setFoundBooksState] = useState();

  // state to hold user input
  const [textInput, setTextInput] = useState('');
  const [textInputPagination, setTextInputPagination] = useState('');
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  // useEffect(() => {
  //   dispatch(fetchSearch('Harry Potter', 0));
  // }, []);
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

  useEffect(() => {
    setFoundBooksState(foundBooks.items);
  }, [foundBooks]);

  //maximum page number
  const pageNumber = Math.ceil((foundBooks.totalItems || 0) / maxResults);
  //   const pageNumber = 10;

  const pageNumberHandler = (event, value) => {
    console.log(value);
    setCurrentPage(value);
    dispatch(fetchSearch(textInputPagination, (value - 1) * maxResults));
  };

  const sortHandler = (e) => {
    dispatch(sortBooks(e.target.value, foundBooks));
  };
  return (
    <div className="book-list">
      <form
        noValidate
        autoComplete="off"
        className="search"
        onSubmit={submitSearch}
      >
        <TextField
          className="search-input-field"
          label="Search for a book"
          variant="outlined"
          value={textInput}
          size="small"
          onChange={inputHandler}
        />

        <FormControl className="radio-btn" component="fieldset">
          <FormLabel component="legend">Sort By:</FormLabel>
          <RadioGroup
            row
            aria-label="position"
            name="position"
            defaultValue="top"
            onClick={sortHandler}
          >
            <FormControlLabel
              value="author"
              control={<Radio color="primary" />}
              label="Author"
              labelPlacement="start"
            />
            <FormControlLabel
              value="title"
              control={<Radio color="primary" />}
              label="Title"
              labelPlacement="start"
            />
          </RadioGroup>
        </FormControl>
        <Button className="btn-submit" type="submit" variant="contained">
          <SearchIcon /> Search
        </Button>
      </form>
      <motion.div className="card-list">
        {/* Check if there are data in the array */}
        {foundBooksState &&
          foundBooksState.length > 0 &&
          foundBooksState.map((book) => (
            <BookItem
              className="card-list-book-item"
              key={book.id}
              book={book}
            />
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
