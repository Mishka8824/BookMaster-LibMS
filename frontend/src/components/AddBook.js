import React, { useState } from 'react';
import '../styles/addBookStyle.css'; // Import your CSS for styling

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publicationYear, setPublicationYear] = useState('');
  const [genre, setGenre] = useState('');
  const [coverImage, setCoverImage] = useState('');

  const handleAddBook = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const newBook = {
      title,
      author,
      publication_year: publicationYear,
      genre,
      coverImage,
    };

    try {
      const response = await fetch('http://localhost:3000/api/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBook),
      });

      if (response.ok) {
        const addedBook = await response.json();
        console.log('Book added:', addedBook);
        // Clear the form fields after successful submission
        setTitle('');
        setAuthor('');
        setPublicationYear('');
        setGenre('');
        setCoverImage('');
      } else {
        console.error('Failed to add book:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="login-container">
        <h2 className="login-title">Add Book</h2>
        <form onSubmit={handleAddBook}>
          <div className="mb-3">
            <label htmlFor="bookTitle" className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              id="bookTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="bookAuthor" className="form-label">Author</label>
            <input
              type="text"
              className="form-control"
              id="bookAuthor"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="publicationYear" className="form-label">Publication Year</label>
            <input
              type="number"
              className="form-control"
              id="publicationYear"
              value={publicationYear}
              onChange={(e) => setPublicationYear(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="bookGenre" className="form-label">Genre</label>
            <input
              type="text"
              className="form-control"
              id="bookGenre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="coverImage" className="form-label">Cover Image URL</label>
            <input
              type="text"
              className="form-control"
              id="coverImage"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Add Book</button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;

