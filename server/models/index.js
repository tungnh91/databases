var db = require('../db');
var express = require('express');
var app = express();
module.exports = {
  messages: {
    get: function (req, res) {
      // db.connect();
      db.query('select messageBody, room, user from users inner join messages on messages.users_Id = users.id inner join rooms on rooms.id = messages.rooms_Id', function(err, results ) {
        if (err) {
          console.log('long query err', err);
        } else {
          console.log('this is the get res body --------------', res.body);
          console.log('this is what we want to respond to a get with strignified', JSON.stringify(results));
          res.write(JSON.stringify(results));
          res.send();
          //db.end();

        }
      });
    }, // a function which produces all the messages
    post: function (req, res) {
      db.query('insert into rooms set room = ?', req.body.roomname, function (err, results) {
        if (err) {
          console.log('we got an error', err);
        }
        db.query('select * from rooms where room = ?', req.body.roomname, function (err, results) {
          if (err) {
            console.log('this is the select * error', err);
          } else {
            var info = {rooms_Id: results[0].id};
            console.log('this is the results from selecting room', results);

            // Get id from rooms table
            db.query('select * from users where user = ?', req.body.username, function (err, results) {
              if (err) {
                console.log(err);
              } else {
                info.users_Id = results[0].id;
                info.messageBody = req.body.message;
                res.send('got a post request');
                db.query('insert into messages set ?', info, function(err, results) {
                  if (err) {
                    throw err;
                  } else {
                    //db.end();
                  }
                });
              }
            });
          }
        }); 
      });
      // db.connect(function () {
      //   db.query('INSERT into messages set ?', {messageBody: req.body.message}, function(err, results, fields) {
      //     if (err) {
      //       console.log('we got an error', err);
      //     } else if (results) {
      //       console.log('this is the results', results);
      //       console.log('fields', fields);
      //     }
      //   });
      // });
      //console.log('connected!!');
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (req, res) {
      db.connect();
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
            db.end();
          } 
        });
      });

      res.send('I got a POST request!!!');
    }
  }
};

