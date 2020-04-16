const Beer = require("../models/beer");

module.exports = {
  create,
  index,
  delete: deleteOne,
};

async function create(req, res) {
  try {
    req.body.createdBy = req.user._id;
    req.body.userName = req.user.name;
    const beer = await Beer.create(req.body);
    res.status(201).json(beer);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function index(req, res) {
  try {
    const beers = await Beer.find({});
    res.status(200).json(beers);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function deleteOne(req, res) {
  try {
    const deletedBeer = await Beer.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedBeer);
  } catch (err) {
    res.status(500).json(err);
  }
}
