'use strict';

const express = require('express');
const sql = require('mssql');

const config = {
  user: 'Dylan\Dylan S',
  password: '123qweawdqwe',
  server: 'DYLAN\SQLEXPRESS',
  database: 'RCArt'
}

let roomRouter = module.exports = exports = express.Router();

// Get Artwork for room with ID
// Currently returns list of ItemID's 
roomRouter.get('/:room', (req, res, next) => {
  let _room = req.params.room;
  sql.connect(config => {
    return sql.query`select a.ItemID from Artwork a join Location b on a.Location = b.ID where a.Location = ${_room}`;
  }).then(result => {
    console.dir('results for room: ' + result);
    res.json.bind(res);
  }).catch(err => {
    console.error('err: ', err);
  });

  sql.on('error', err => {
    console.dir('err' + err);
  });
});

// Returns all Rooms from Locations
// Presumably will use Name results to populate drop-down list
roomRouter.get('/', (req, res, next) => {
  sql.connect(config => {
    return sql.query(`select * from Location`)
  }).then(result => {
    console.log('List of Rooms and all details', result);
    res.json.bind(res);
  }).catch(err => {
    console.error('err', err);
  });

  sql.on('error', err => {
    console.dir('err' + err);
  });
});