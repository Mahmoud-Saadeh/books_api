import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';

export const BookDetail = ({ setShow, show, book }) => {
  const handleClose = () => setShow(false);

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{book.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h6>
              <b>Number of pages:</b> <span>{book.pageCount}</span>
            </h6>
          </div>

          <div>
            <h5>Description: </h5>
            <p>{book.description}</p>
          </div>
          <div>
            <a href={book.previewLink}>Preview</a>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
