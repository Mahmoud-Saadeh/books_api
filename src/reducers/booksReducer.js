const initState = {
  foundBooks: [],
};

const booksReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_SEARCHED_BOOKS':
      return {
        ...state,
        foundBooks: action.payload.searched,
      };
    case 'SORT_BOOKS':
      return {
        ...state,
        foundBooks: action.payload.sortedData,
      };
    default:
      return { ...state };
  }
};
export default booksReducer;
