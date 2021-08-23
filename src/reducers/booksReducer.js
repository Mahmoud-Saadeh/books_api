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
    default:
      return { ...state };
  }
};
export default booksReducer;
