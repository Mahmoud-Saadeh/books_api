import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import { BooksList } from './BooksList';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

Enzyme.configure({ adapter: new Adapter() });

describe('Render BookList component', () => {
  jest.setTimeout(10000);

  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  const initialState = { books: { foundBooks: [] } };
  // const mockStore = configureStore();
  let store;

  it('write on the input field and submit the form', async () => {
    store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <BooksList />
      </Provider>
    );

    // expect(input.get(0).value).to.equal('Hello');
    wrapper.find('input').simulate('change', { target: { value: 'harry' } });
    expect(wrapper.find('input').props().value).toBe('harry');

    wrapper.find('.search').simulate('submit');
    expect(wrapper.find('input').props().value).toBe('');

    expect(initialState.books.foundBooks.length).toBe(0);

    expect(wrapper).toBeTruthy();
    expect(wrapper.find('Search')).not.toBeNull();
  });
});
