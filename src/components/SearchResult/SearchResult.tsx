import { Component } from 'react';
import { Book } from '../../types.tsx';
import SearchItem from '../SearchItem/SearchItem.tsx';
import './SearchResult.css';

interface Props {
  books: Book[];
}

class SearchResult extends Component<Props> {
  render() {
    const { books } = this.props;
    return (
      <ul className="container">
        {books.map((book: Book) => (
          <SearchItem key={book.uid} book={book} />
        ))}
      </ul>
    );
  }
}

export default SearchResult;
