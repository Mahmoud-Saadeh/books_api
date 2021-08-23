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
