var db = require('../db');
var express = require('express');
var app = express();
module.exports = {
  messages: {
    get: function (req, res) {
      db.connect();
      console.log('connected!!');
      res.send('I got a GET request!!!');
      db.end();
    }, // a function which produces all the messages
    post: function (req, res) {
      db.connect(function () {
        db.query('INSERT into messages set ?', {messageBody: req.body.message}, function(err, results, fields) {
          if (err) {
            console.log('we got an error', err);
          } else if (results) {
            console.log('this is the results', results);
          } else {
            console.log('fields', fields);
          }
        });
      });
      res.send('got a post request');
      //console.log('connected!!');
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (req, res) {
      db.connect();
      console.log('connected!!');
      res.send('I got a GET request!!!');
      db.end();
    },
    post: function (req, res) {
      db.connect(function () {
        db.query('INSERT into users set user = ?', req.body.username, function(err, results, fields) {
          if (err) {
            console.log('we got an error', err);
          } else if (results) {
            console.log('this is the results', results);
          } else {
            console.log('fields', fields);
          }
        });
        console.log('post username', req.body.username);
        console.log('connected!!');
      });

      res.send('I got a POST request!!!');
    }
  }
};

