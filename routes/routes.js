'use strict';

// Application Dependencies
const express = require('express');
const router = express.Router();


const db = require('./pg');

// API routes
router.get('/', db.getBooks);
router.get('/searches/new', db.newSearch);
router.post('/searches', db.createSearch);
router.get('/books/:id', db.getBook);
router.post('/books', db.createBook);
router.put('/books/:id', db.updateBook);
router.delete('/books/:id', db.deleteBook);

router.get('*', (request, response) => response.status(404).send('This route does not exist'));

module.exports = router;
