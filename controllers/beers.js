const Beer = require("../models/beer");

module.exports = {
  addFavorite,
  delete: deleteFavorite,
  allFavorites
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

async function allFavorites(req, res) {
  try {
    const favorites = await Beer.find({ favoritedBy: { '$in': req.user._id } });
    console.log('fav: ', favorites);
    res.json(favorites);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function deleteFavorite(req, res) {
  try {
    console.log('params: -------->>>>>', req.params.id)
    const beer = await Beer.findById(req.params.id);
    console.log('beer: ', beer);
    beer.favoritedBy.remove(req.user._id);
    await beer.save();
    allFavorites(req, res);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
}

