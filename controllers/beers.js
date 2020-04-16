const Beer = require("../models/beer");

module.exports = {
  create,
  index,
  delete: deleteOne,
};

async function create(req, res) {
  const user = await User.findById(req.user._id);
  req.body.name = req.user.name;
  user.beers.favoritedBy.push(req.body);
  user.save(function (err) {
    res.status(201).json(beer);
    res.status(500).json(err);
  });
}

async function index(req, res) {
  const user = await User.findById(req.user._id);
  const beers = await Beer.favoritedBy.user._id.find({});
  res.status(200).json(beers);
}

async function deleteOne(req, res) {
  const user = await User.findById(req.user._id);
  const deletedBeer = await Beer.findByIdAndRemove(req.params.id);
  user.save(function (err) {
    res.status(200).json(deletedBeer);
    res.status(500).json(err);
  });
}
