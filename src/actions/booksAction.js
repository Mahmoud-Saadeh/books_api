import axios from 'axios';

import { searchByBookURL } from '../api';

// to fetch the data from the api and send the response to the reducer
const fetchSearch = (book_name, startIndex) => async (dispatch) => {
  const searchBooks = await axios.get(searchByBookURL(book_name, startIndex));

  dispatch({
    type: 'FETCH_SEARCHED_BOOKS',
    payload: {
      searched: searchBooks.data,
    },
  });
};

// to sort the data and send them to the reducer
const sortBooks = (orderBy, booksData) => async (dispatch) => {
  const sortedData = sortHandler(orderBy, booksData);

  dispatch({
    type: 'SORT_BOOKS',
    payload: {
      sortedData,
    },
  });
};

// helper function to sort the data
function sortHandler(orderBy, booksData) {
  if (orderBy === 'title') {
    return {
      ...booksData,
      items: booksData.items.sort((a, b) => {
        if (
          a.volumeInfo.title.toLowerCase() < b.volumeInfo.title.toLowerCase()
        ) {
          return -1;
        }
        if (
          a.volumeInfo.title.toLowerCase() > b.volumeInfo.title.toLowerCase()
        ) {
          return 1;
        }
        return 0;
      }),
    };
  }

  if (orderBy === 'author') {
    return {
      ...booksData,
      items: booksData.items.sort((a, b) => {
        if (
          (a.volumeInfo.authors
            ? a.volumeInfo.authors[0].toLowerCase()
            : undefined) <
          (b.volumeInfo.authors
            ? b.volumeInfo.authors[0].toLowerCase()
            : undefined)
        ) {
          return -1;
        }
        if (
          (a.volumeInfo.authors
            ? a.volumeInfo.authors[0].toLowerCase()
            : undefined) >
          (b.volumeInfo.authors
            ? b.volumeInfo.authors[0].toLowerCase()
            : undefined)
        ) {
          return 1;
        }
        return 0;
      }),
    };
  }
}

export { sortHandler, fetchSearch, sortBooks };
