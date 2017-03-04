var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('this is the req body --------------------------', req.body);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      //res.sendStatus(200);
      models.messages.post(req, res);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      models.users.post(req, res);

    }
  }
};

