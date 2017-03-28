'use strict';

const express = require('express');
const sql = require('mssql');

const config = {
  user: 'Dylan\Dylan S',
  password: '',
  server: 'DYLAN\SQLEXPRESS',
  database: 'RCArt'
}

let itemRouter = module.exports = exports = express.Router();

itemRouter.get('/:itemId', (req, res, next) => {
  let _itemId = req.params.itemId;
  sql.connect((config) => {
    return sql.query`select * from Artwork where ItemId = ${_itemId}`;
  }).then(result => {
    // Currrently returns full list of Artwork Data
    console.dir('result: ' + result);
    res.json.bind(res);
  }).catch(err => {
    console.dir('err' + err);
  });

  sql.on('error', err => {
    console.dir('err' + err);
  });
});