const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/users");
const beersCtrl = require("../../controllers/beers");

router.post("/signup", usersCtrl.signup);
router.post("/login", usersCtrl.login);
router.post("/", beersCtrl.create);
router.get("/fridge", beersCtrl.index);
router.get("/:id", beersCtrl.delete);

module.exports = router;
