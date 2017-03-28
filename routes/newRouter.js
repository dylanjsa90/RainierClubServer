'use strict';

const express = require('express');
const sql = require('mssql');

const config = {
  user: 'Dylan\Dylan S',
  password: '',
  server: 'DYLAN\SQLEXPRESS',
  database: 'RCArt'
}

let newRouter = module.exports = exports = express.Router();

newRouter.get('/', (req, res, next) => {
  sql.connect(config => {
    return sql.query`SELECT TOP(8) ItemId from Artwork ORDER BY DateAcquired DESC;`
  }).then(results => {
    // List of 8 most recent ItemIds
    console.log('Results :', results);
  }).catch(err => {
    console.error('err', err);
  });

  sql.on('error', err => {
    console.dir('err' + err);
  });
})