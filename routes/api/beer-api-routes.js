const express = require("express");
const router = express.Router();
const request = require("request");
const API_KEY = process.env.API_KEY;

router.get("/", function (req, res) {
  request("https://api.brewerydb.com/v2/beers/?key=" + API_KEY, function (
    error,
    response,
    body
  ) {
    res.json(body);
  });
});

// router.get("/", function (req, res) {
//   request(
//     `https://api.brewerydb.com/v2/beer/${beerId}/?key=` + API_KEY,
//     function (error, response, body) {
//       res.json(body);
//     }
//   );
// });

module.exports = router;
