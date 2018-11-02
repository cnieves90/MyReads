import React, { Component } from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class BookList extends Component {
   render() {
      const books = this.props.books
      const booksOnShelf = this.props.booksOnShelf

      return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>My Digital Reads</h1>
          </div>

          {<BookShelf books={books}
            booksOnShelf={booksOnShelf}
          />}

        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
     </div>
    )
   }
 }

export default BookList
