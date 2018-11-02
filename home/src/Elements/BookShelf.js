import React, { Elements } from 'react'
import BookItems from './BookItems'

class BookShelf extends Elements {
   render() {

   const books = this.props.books
   const booksOnShelf = this.props.booksOnShelf

   return (
      <div className="shelfContainer">
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {
                books.filter(book => book.shelf === 'currentlyReading')
                .map(book => (
                  <li key={book.id} >
                    <BookItems book={book} booksOnShelf={booksOnShelf} currentShelf="currentlyReading"/>
                  </li>
                  ))
                 }
              </ol>
            </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want To Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                 {
                books.filter(book => book.shelf === "wantToRead")
                .map(bookitems => (
                  <li key={bookitems.id} >
                    <BookItems book={bookitems} booksOnShelf={booksOnShelf} currentShelf="wantToRead"/>
                  </li>
                  ))
                }
              </ol>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {
                books.filter(book => book.shelf === "read")
                .map(book => (
                  <li key={book.id} >
                    <BookItems book={book} booksOnShelf={booksOnShelf} currentShelf="read" />
                  </li>
                 ))
                }
              </ol>
            </div>
          </div>
      </div>
      )
   }
}

export default BookShelf