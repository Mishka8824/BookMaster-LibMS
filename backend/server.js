const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const booksRoutes = require('./routes/books');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use('/api/books', booksRoutes);


const server = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/libraryMS');
    console.log('Connected to MongoDB');
    
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.error('Could not connect to MongoDB', err);
  }
};

server();
