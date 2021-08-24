import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { bookResult } from '../mocks/response';

import { BookItem } from './BookItem';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

Enzyme.configure({ adapter: new Adapter() });

describe('Render BookItem component', () => {
  const initialState = { books: { foundBooks: [] } };
  // const mockStore = configureStore();
  let store;

  it('Shows book as props', () => {
    store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <BookItem book={bookResult} />
      </Provider>
    );

    expect(wrapper).toBeTruthy();
    expect(wrapper.find('Flowers For Algernon')).not.toBeNull();
  });
});
