'use strict';

const express = require('express');
const sql = require('mssql');

let featuredRouter = module.exports = exports = express.Router();

const config = {
  user: 'Dylan\Dylan S',
  password: '',
  server: 'DYLAN\SQLEXPRESS',
  database: 'RCArt'
}

featuredRouter.get('/', (req, res, next) => {
  sql.connect(config => {
    return sql.query`SELECT * from FeaturedItem`;
  }).then(results => {
    // Results = Featured ItemId, Published, and description
    console.log('Featured data: ', results)
  }).catch(err => {
    console.error('err: ', err);
  })

  sql.on('error', err => {
    console.error('sql error', err);
  });
});

// TODO Featured Artist ??