import React, { Component } from 'react'

class BookItems extends Component {
    state = {}

    render() {

      const book = this.props.book
      const booksOnShelf = this.props.booksOnShelf
      const currentShelf = this.props.currentShelf
      let img = this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : null

      return (
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${img})`
              }}>
            </div>
            <div className="book-shelf-changer">
              <select
                onChange={(e) => booksOnShelf(book, e.target.value)}
                value={currentShelf || "none"}
              >
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
        </div>
     )
  }
}

export default BookItems
