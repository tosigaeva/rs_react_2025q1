import { Component, ChangeEvent } from 'react';
import './SearchBar.css';
import { Book } from '../../types.tsx';
import { fetchBooks } from '../../servises/bookService.ts';
import {
  getSearchValue,
  setSearchValue,
} from '../../servises/localStorageUtil.ts';

interface Props {
  sendBooks: (books: Book[]) => void;
  sendLoadingStatus: (isLoading: boolean) => void;
  throwError: (error: Error) => void;
}

interface State {
  inputValue: string;
}

class SearchBar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  componentDidMount() {
    this.setState({ inputValue: getSearchValue() }, () =>
      this.fetchListOfBooks(),
    );
  }

  async fetchListOfBooks() {
    try {
      this.props.sendLoadingStatus(true);
      const books = await fetchBooks(this.state.inputValue);
      this.props.sendBooks(books);
      this.props.sendLoadingStatus(false);
    } catch (error) {
      console.error('Error:', error);
      this.props.throwError(new Error('Api Error'));
    }
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.target.value });
  };

  handleClick = () => {
    setSearchValue(this.state.inputValue);
    this.fetchListOfBooks();
  };

  render() {
    return (
      <div className="input">
        <input
          type="search"
          placeholder="Search..."
          value={this.state.inputValue}
          onChange={this.handleChange}
          className="input-box"
        />
        <button onClick={this.handleClick} className="input-submit">
          Search
        </button>
      </div>
    );
  }
}

export default SearchBar;
