const getCharById = require("../controllers/getCharById");
const postFav  = require("../controllers/postFav");
const deleteFav  = require("../controllers/deleteFav");
const {login, createUser }= require("../controllers/login");
const express = require("express");
const router = express.Router();


router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/login", createUser);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);



module.exports = router;