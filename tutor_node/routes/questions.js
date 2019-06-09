var express = require('express');
var router = express.Router();
var request = require('request-promise');

let url = 'https://math.ly/api/v1';

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    const mainCategory = req.query.mainCategory;
    const subCategory = req.query.subCategory;
    url = url + '/' + mainCategory + '/' + subCategory + '.json'
    const response = await request.get(url);
    res.send(response);
  }
  catch(err) {
    return next(err);
  }
});

module.exports = router;
