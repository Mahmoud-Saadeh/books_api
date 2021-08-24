import axios from 'axios';

import { searchByBookURL } from '../api';

export const fetchSearch = (book_name, startIndex) => async (dispatch) => {
  const searchBooks = await axios.get(searchByBookURL(book_name, startIndex));

  dispatch({
    type: 'FETCH_SEARCHED_BOOKS',
    payload: {
      searched: searchBooks.data,
    },
  });
};

export const sortBooks = (orderBy, booksData) => async (dispatch) => {
  let data;
  if (orderBy === 'title') {
    data = {
      ...booksData,
      items: booksData.items.sort((a, b) => {
        if (a.volumeInfo.title < b.volumeInfo.title) {
          return -1;
        }
        if (a.volumeInfo.title > b.volumeInfo.title) {
          return 1;
        }
        return 0;
      }),
    };
  }

  if (orderBy === 'author') {
    data = {
      ...booksData,
      items: booksData.items.sort((a, b) => {
        if (
          a.volumeInfo.authors
            ? a.volumeInfo.authors[0]
            : a.volumeInfo.authors < b.volumeInfo.authors
            ? b.volumeInfo.authors[0]
            : b.volumeInfo.authors
        ) {
          return -1;
        }
        if (
          a.volumeInfo.authors
            ? a.volumeInfo.authors[0]
            : a.volumeInfo.authors > b.volumeInfo.authors
            ? b.volumeInfo.authors[0]
            : b.volumeInfo.authors
        ) {
          return 1;
        }
        return 0;
      }),
    };
  }
  dispatch({
    type: 'SORT_BOOKS',
    payload: {
      data,
    },
  });
};
