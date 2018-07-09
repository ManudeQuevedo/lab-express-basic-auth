const express = require('express');
const siteRoutes  = express.Router();


/* GET home page */
siteRoutes.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = siteRoutes;