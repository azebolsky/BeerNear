const Beer = require("../models/beer");

module.exports = {
  addFavorite,
  index,
  delete: deleteOne,
};

async function addFavorite(req, res) {
  try {
    const beer = await Beer.create(req.body);
    beer.favoritedBy.push(req.user._id);
    await beer.save();
    res.json(beer);
  } catch (err) {
    res.status(500).json(err);
  }
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
