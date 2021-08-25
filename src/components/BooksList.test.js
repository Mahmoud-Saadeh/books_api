import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { BooksList } from './BooksList';
import { sortHandler } from '../actions/booksAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

Enzyme.configure({ adapter: new Adapter() });

const sampleResponse = {
  items: [
    { volumeInfo: { title: 'book1', authors: ['b', 'd'] } },
    { volumeInfo: { title: 'book2', authors: ['a', 'd'] } },
  ],
};

describe('tests for BookList component', () => {
  const initialState = { books: { foundBooks: [] } };
  // const mockStore = configureStore();
  let store;

  it('write on the input field and submit the form', () => {
    store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <BooksList />
      </Provider>
    );

    // expect(input.get(0).value).to.equal('Hello');
    wrapper
      .find('.search-input-field input')
      .simulate('change', { target: { value: 'harry' } });
    expect(wrapper.find('.search-input-field input').props().value).toBe(
      'harry'
    );

    wrapper.find('.search').simulate('submit');
    expect(wrapper.find('.search-input-field input').props().value).toBe('');

    expect(initialState.books.foundBooks.length).toBe(0);

    expect(wrapper).toBeTruthy();
    expect(wrapper.find('Search')).not.toBeNull();
  });

  it('Sort the data based on the author or the title', () => {
    const sortByAuthor = sortHandler('author', sampleResponse);
    expect(sortByAuthor.items[0].volumeInfo.title).toBe('book2');
    expect(sortByAuthor.items[1].volumeInfo.title).toBe('book1');

    const sortByTitle = sortHandler('title', sampleResponse);
    expect(sortByTitle.items[0].volumeInfo.title).toBe('book1');
    expect(sortByTitle.items[1].volumeInfo.title).toBe('book2');
  });
});
