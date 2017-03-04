var db = require('../db');
var express = require('express');
var app = express();
module.exports = {
  messages: {
    get: function (req, res) {
      res.send('I got a GET request!!!');
    }, // a function which produces all the messages
    post: function (req, res) {
      res.send('I got a POST request!!!');
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (req, res) {
      res.send('I got a GET request!!!');
    },
    post: function (req, res) {
      res.send('I got a POST request!!!');
    }
  }
};

