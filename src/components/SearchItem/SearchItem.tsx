import { Component } from 'react';
import { Book } from '../../types.tsx';
import './SearchItem.css';

interface Props {
  book: Book;
}

class SearchItem extends Component<Props> {
  render() {
    const { book } = this.props;
    return <li className="item">{book.title}</li>;
  }
}

export default SearchItem;
