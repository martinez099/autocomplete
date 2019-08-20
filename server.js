/*
* Copyright © 2019 Redis Labs, Inc.
* This program should be used for demo puposes only. The software
* is provided “as is”, without warranty of any kind.
*
* Usage: node server.js <HTTP port> <Redis port>
* Example: node server.js 3000 6379
*/

const app = require('express')();
const httpServer = require('http').Server(app);
const redis = require('redis');

const autocomplete = require('./autocomplete.js');

const httpPort = process.argv[2] || 3000;
const redisPort = process.argv[3] || 6379;

// set up Redis
redisClient = redis.createClient({
  port : redisPort,
  host : 'localhost'
});

// set up route /add
app.get('/add', function(req, res) {
  if (typeof req.query.p != 'string') {
    res.status(422).send('Missing phrase.');
  } else {
    autocomplete.add(redisClient, req.query.p, function(error, result) {
      if (error) {
        throw error;
      }
      res.status(200).send('Added to phrases.');
    });
  }
});

// set up route /suggest
app.get('/suggest', function(req, res) {
  if (typeof req.query.p != 'string') {
    res.status(422).send('Missing phrase.');
  } else {
    autocomplete.suggest(redisClient, req.query.p, function(error, result) {
      if (error) {
        throw error;
      }
      res.status(200).send(result);
    }); 
  }
});

// start HTTP server
httpServer.listen(httpPort, function(error, result) {
  if (error) {
    throw error;
  } else {
    console.log('HTTP listening on:' + httpPort);
  }
});
