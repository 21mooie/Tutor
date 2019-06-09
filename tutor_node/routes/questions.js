var express = require('express');
var router = express.Router();
var request = require('request-promise');

/* GET users listing. */
router.get('/category', async function(req, res, next) {
  try {
    const mainCategory = req.query.mainCategory;
    const subCategory = req.query.subCategory;
    const url = 'https://math.ly/api/v1/' + mainCategory + '/' + subCategory + '.json'
    const response = await request.get(url);
    res.send(response);
  }
  catch(err) {
    return next(err);
  }
});

module.exports = router;
