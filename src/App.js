import { BooksList } from './components/BooksList';
import { NavBar } from './components/NavBar';
import { Route, Switch } from 'react-router';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App" data-test="component-app">
      <NavBar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/search">
          <BooksList />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
