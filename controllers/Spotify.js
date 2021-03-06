'use strict';

var writer = require('../utils/writer.js');

var Spotify = require('../service/SpotifyService');

module.exports.exchangeCode = function exchangeCode (req, res, next) {
  var body = req.swagger.params['body'].value;
  Spotify.exchangeCode(body)
    .then(function (response) {
      writer.writeJson(res, response);
    })
    .catch(function (response) {
      writer.writeJson(res, response);
    });
};

module.exports.spotifyRefreshPOST = function spotifyRefreshPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Spotify.spotifyRefreshPOST(body)
    .then(function (response) {
      writer.writeJson(res, response);
    })
    .catch(function (response) {
      writer.writeJson(res, response);
    });
};
