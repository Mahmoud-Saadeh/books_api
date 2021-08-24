import React from 'react';
import { motion } from 'framer-motion';
import { popup } from '../animation';
import './BookItem.scss';

export const BookItem = ({ book }) => {
  return (
    <motion.div
      className="card-item"
      variants={popup}
      initial="hidden"
      animate="show"
    >
      <h4>{book.volumeInfo.title}</h4>
      <div className="authors-date">
        <ul>
          {book.volumeInfo.authors &&
            book.volumeInfo.authors.map((author, index) => (
              <li key={index}>{author}</li>
            ))}
        </ul>
        <small>{book.volumeInfo.publishedDate}</small>
      </div>

      {/* categories */}
      <ul className="categories-list">
        {book.volumeInfo.categories &&
          book.volumeInfo.categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
      </ul>
      <img
        src={book.volumeInfo.imageLinks.thumbnail}
        alt={book.volumeInfo.title}
      />
    </motion.div>
  );
};
