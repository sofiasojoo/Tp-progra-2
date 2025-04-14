var express = require('express');
var router = express.Router();

const searchController= require("../controllers/searchController.js")

/* GET home page. */


router.get("/", searchController.search)











module.exports = router;