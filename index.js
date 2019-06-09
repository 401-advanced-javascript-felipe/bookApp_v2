'use strict';

require('dotenv').config();

require('./server').start(process.env.PORT);
