'use strict';

require('dotenv').config();

// Application Dependencies
const express = require('express');
const pg = require('pg');
const superagent = require('superagent');

// Application Setup
const app = express();
const PORT = process.env.PORT;

// Database Setup
const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));

// Application Middleware
app.use(require('./middleware/expressUrl.js'));
app.use(require('./middleware/expressStatic.js'));
app.use(require('./middleware/methodOverride.js'));

// Set the view engine for server-side templating
app.set('view engine', 'ejs');

// API Routes
const router = require('./routes/routes');
app.use(router);

module.exports = {
  server: app,
  start: port =>{
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`)); 
  },
};