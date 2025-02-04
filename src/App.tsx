import { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.tsx';
import SearchResult from './components/SearchResult/SearchResult.tsx';
import { Book } from './types.tsx';
import Loader from './components/Loader/Loader.tsx';

interface State {
  books: Book[];
  isLoading: boolean;
  error: Error | null;
}

class App extends Component {
  state: State = {
    books: [],
    isLoading: false,
    error: null,
  };

  setBooks = (books: Book[]) => {
    this.setState({ books });
  };

  setIsLoading = (isLoading: boolean) => {
    this.setState({ isLoading });
  };

  throwError = (error: Error) => {
    this.setState({ error });
  };

  render() {
    if (this.state.error) {
      throw this.state.error;
    }

    return (
      <div className="app">
        <SearchBar
          sendBooks={this.setBooks}
          sendLoadingStatus={this.setIsLoading}
          throwError={this.throwError}
        />
        <button
          className="error-button"
          onClick={() => this.throwError(new Error('An error occurred'))}
        >
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
