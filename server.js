'use strict';

const express = require('express');
const app = express();
const morgan = require('morgan');
const sql = require('mssql');

const itemRouter = require('./routes/itemRouter.js');
const artistRouter = require('./routes/artistRouter.js');
const roomRouter = require('./routes/roomRouter.js');
const featuredRouter = require('./routes/featuredRouter.js');
const newRouter = require('./routes/newRouter.js');
const typeRouter = require('./routes/typeRouter.js');


app.use(morgan('dev'));

app.use('/api/item', itemRouter);
app.use('/api/artist', artistRouter);
app.use('/api/room', roomRouter);
app.use('/api/featured', featuredRouter);
app.use('/api/new', newRouter);
app.use('/api/type', typeRouter);

module.exports = app;