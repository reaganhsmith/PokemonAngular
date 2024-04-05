const express = require('express');
const router = express.Router();
const path = require('path'); // Import the path module

router.use(express.static(path.join(__dirname, '../..', 'dist/pokemon/browser')));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../..', 'dist/pokemon/browser/index.html'));
});

module.exports = router;
