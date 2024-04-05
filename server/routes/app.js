var express = require('express');
var router = express.Router();
const path = require('path'); // Import the path module


router.use(express.static(path.join(__dirname, '../..', 'dist/pokemon/browser')));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { root: path.join(__dirname, '../..', 'dist/pokemon/browser/') });
});

module.exports = router;
