'use strict';

const express = require('express');
const sql = require('mssql');

const config = {
  user: 'Dylan\Dylan S',
  password: '',
  server: 'DYLAN\SQLEXPRESS',
  database: 'RCArt'
}

let artistRouter = module.exports = exports = express.Router();

artistRouter.get('/artist/:artistId', (req, res, next) => {
  let _artistId = req.params.artistId;
  sql.connect(config => {
    return sql.query`SELECT a.ItemID from Artwork a join Artist b on a.Artist = b.ID where b.ID = ${_artistId}`;
  }).then(results => {
    // Results = List of Artwork IDs
    console.log('Results: ', results);
  }).catch(err => {
    console.error('err: ', err);
  });

  sql.on('error', err => {
    console.dir('err' + err);
  });
})

artistRouter.get('/', (req, res, next) => {
  sql.connect(config => {
    return sql.query`SELECT ID, FirstName, LastName, MiddleName FROM Artist WHERE FirstName IS NOT NULL`;
  }).then(results => {
    // List of Artist Names and IDs presumably for drop-down list population
    // Currently excludes unknown artists
    console.log('Results: ', results);
    res.json.bind(res);
  }).catch(err => {
    console.error('err', err);
  });
  sql.on('error', err => {
    console.dir('err' + err);
  });
})