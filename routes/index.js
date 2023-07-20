var express = require('express');
var router = express.Router();
var glossaryList = require('../data/glossaryData');

console.log(JSON.stringify(glossaryList))
/* Get glossary */
router.get('/', function(req, res, next) {
  res.render('glossary', { title: 'SIT716', subHeading: 'Glossary' , list: glossaryList});
});


module.exports = router;
