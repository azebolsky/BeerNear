const express = require("express");
const router = express.Router();
const request = require("request");
const API_KEY = process.env.API_KEY;

router.get("/", function (req, res) {
  const currentPage = req.query.page;
  request(
    `https://api.brewerydb.com/v2/beers/?p=${currentPage}&key=${API_KEY}`,
    function (error, response, body) {
      res.json(body);
    }
  );
});

// router.get("/", function(req))

router.post("/fridge", function (req, res) {
  const beerId = req.query.id;
  request(
    `https://api.brewerydb.com/v2/beer/${beerId}/?key=${API_KEY}`,
    function (error, response, body) {
      res.json(body);
    }
  );
});

module.exports = router;
