import { BooksList } from './components/BooksList';
import { SearchBar } from './components/SearchBar';

function App() {
  return (
    <div className="App" data-test="component-app">
      <SearchBar />
      <BooksList />
    </div>
  );
}

export default App;
