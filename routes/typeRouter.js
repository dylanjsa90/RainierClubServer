'use strict';

const express = require('express');
const sql = require('mssql');

const config = {
  user: 'Dylan\Dylan S',
  password: '',
  server: 'DYLAN\SQLEXPRESS',
  database: 'RCArt'
}

let typeRouter = module.exports = exports = express.Router();

typeRouter.get('/:typeId', (req, res, next) => {
  let _typeId = req.params.typeId;
  sql.connect(config => {
    return sql.query`SELECT a.ItemID from Artwork a join EnumItemType b on a.ItemType = b.ID where ID = ${_typeId}`
  }).then(results => {
    // List of itemIDs
    console.log('Results: ', results);
  }).catch(err => {
    console.error('error: ', err);
  })

  sql.on('error', err => {
    console.error('sql error: ', err);
  })
})
// Example query: select a.ItemID from Artwork a join EnumItemType b on a.ItemType = b.ID where ID = 1;

typeRouter.get('/', (req, res, next) => {
  sql.connect(config => {
    return sql.query`SELECT * FROM EnumItemType`;
  }).then(results => {
    // Results = list of (ID, Sequence, ItemType, and Help)
    console.log('Results: ', results)
  }).catch(err => {
    console.error('error: ', err);
  });
  
  sql.on('error', err => {
    console.dir('err' + err);
  });
});