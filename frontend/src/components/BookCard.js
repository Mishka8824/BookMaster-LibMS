import React from "react";
import '../styles/bookCardStyle.css'; 

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.coverImage} className="cover-image" alt={book.title} style={{height: '280px'}}/>
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-author">by {book.author}</p>
        <p className="card-text">
          <strong>Year:</strong> {book.publication_year} <br />
          <strong>Genre:</strong> {book.genre}
        </p>
        <a href="#" className="btn btn-primary">Read</a>
      </div>
    </div>
  );
};

export default BookCard;
