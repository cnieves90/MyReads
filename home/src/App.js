import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import BookSearch from "./Elements/BookSearch";
import BookList from "./Elements/BookList";
import * as BooksAPI from "./BooksAPI";

class BooksApp extends React.Component {
 constructor(props){
    super(props);
    this.handleChangeShelf = this.handleChangeShelf.bind(this);
  }

  elementDidMount() {
    BooksAPI.getAll().then(data => {
      this.setState({
        books: data
      });
    });
  }

  handleChangeShelf = (book: any, shelf: string) => {
    BooksAPI.update(book, shelf).then(response => {
      this.getBooksOnShelf();
    });
  };

  getBooksOnShelf() {
    BooksAPI.getAll().then(data => {
      this.setState({
        books: data
      });
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() =>
        <BookList books={this.state.books} booksOnShelf={this.handleChangeShelf}/>} />
        <Route
          path="/search"
          render={() =>
            <BookSearch onChangeShelf={this.handleChangeShelf} booksOnShelf={this.state.books} />}
        />
      </div>
    );
  }
}

export default BooksApp;
