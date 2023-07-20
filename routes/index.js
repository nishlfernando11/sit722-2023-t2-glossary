var express = require('express');
var router = express.Router();
var glossaryList = require('../data/glossaryData');

/* Get glossary */
router.get('/', function(req, res, next) {
  res.render('glossary', { title: 'SIT722 DevOps Glossary', subHeading: 'Glossary' , list: glossaryList});
});


module.exports = router;
