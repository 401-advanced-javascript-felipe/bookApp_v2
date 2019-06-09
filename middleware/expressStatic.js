'use static';

const express = require('express');
const path = require('path');
const staticPublic = path.join(__dirname,'../public');

module.exports = express.static(staticPublic);
