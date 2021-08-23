import { maxResults } from './constants';
//Base url
const BASE_URL = `https://www.googleapis.com/books/v1/volumes/?key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}&maxResults=${maxResults}`;
// &q=harry

export const searchByBookURL = (book_name, startIndex) =>
  `${BASE_URL}&q=${book_name}&startIndex=${startIndex}`;
