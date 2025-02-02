import { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.tsx';
import SearchResult from './components/SearchResult/SearchResult.tsx';
import { Book } from './types.tsx';
import Loader from './components/Loader/Loader.tsx';

interface State {
  books: Book[];
  isLoading: boolean;
}

class App extends Component {
  state: State = {
    books: [],
    isLoading: false,
  };

  setBooks = (books: Book[]) => {
    this.setState({ books });
  };

  setIsLoading = (isLoading: boolean) => {
    this.setState({ isLoading });
  };

  throwError = () => {
    this.setState({ books: null });
  };

  render() {
    return (
      <div className="app">
        <SearchBar
          sendBooks={this.setBooks}
          sendLoadingStatus={this.setIsLoading}
        />
        <button className="error-button" onClick={this.throwError}>
          Error
        </button>
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <SearchResult books={this.state.books} />
        )}
      </div>
    );
  }
}

export default App;
