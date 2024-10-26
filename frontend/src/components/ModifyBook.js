import React, { useState, useEffect } from "react";
import axios from "axios"; 
import '../styles/modifyBooksStyle.css'

const ModifyBook = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null); // Track selected book
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publicationYear, setPublicationYear] = useState('');
  const [genre, setGenre] = useState('');
  const [coverImage, setCoverImage] = useState('');

  // Fetch books when component loads
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/books'); // Get all books
        setBooks(response.data); // Store books
      } catch (err) {
        console.error(err);
      }
    };

    fetchBooks();
  }, []);

  // Set form data when book is selected
  const handleBookSelect = (e) => {
    const bookId = e.target.value;
    const book = books.find(b => b._id === bookId); // Find selected book by ID
    setSelectedBook(book);
    setTitle(book.title);
    setAuthor(book.author);
    setPublicationYear(book.publication_year);
    setGenre(book.genre);
    setCoverImage(book.coverImage);
  };

  // Update Book
  const handleUpdateBook = async (e) => {
    e.preventDefault();
    if (!selectedBook) return;

    try {
      const updatedBook = {
        title,
        author,
        publication_year: publicationYear,
        genre,
        coverImage,
      };

      await axios.put(`http://localhost:3000/api/books/${selectedBook._id}`, updatedBook); // Update book by ID
      alert('Book updated successfully');
    } catch (err) {
      console.error(err);
      alert('Error updating book');
    }
  };

  // Delete Book
  const handleDeleteBook = async () => {
    if (!selectedBook) return;

    try {
      await axios.delete(`http://localhost:3000/api/books/${selectedBook._id}`); // Delete book by ID
      alert('Book deleted successfully');
      setBooks(books.filter(b => b._id !== selectedBook._id)); // Remove deleted book from list
      setSelectedBook(null); // Reset form
    } catch (err) {
      console.error(err);
      alert('Error deleting book');
    }
  };

  return (
    <div className="modify-book-container">
      <h2 className="heading">Modify Book</h2>

      {/* Select a book to modify or delete */}
      <select className="form-select mb-3" onChange={handleBookSelect}>
        <option value="">Select a Book</option>
        {books.map(book => (
          <option key={book._id} value={book._id}>
            {book.title}
          </option>
        ))}
      </select>

      {selectedBook && (
        <form onSubmit={handleUpdateBook}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="author" className="form-label">Author</label>
            <input
              type="text"
              className="form-control"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="publicationYear" className="form-label">Publication Year</label>
            <input
              type="text"
              className="form-control"
              id="publicationYear"
              value={publicationYear}
              onChange={(e) => setPublicationYear(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="genre" className="form-label">Genre</label>
            <input
              type="text"
              className="form-control"
              id="genre"
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

          <button type="submit" className="btn btn-primary">Update Book</button>
          <button type="button" className="btn btn-danger ms-3" onClick={handleDeleteBook}>
            Delete Book
          </button>
        </form>
      )}
    </div>
  );
};

export default ModifyBook;
