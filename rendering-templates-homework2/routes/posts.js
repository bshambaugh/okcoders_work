var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET posts */
router.get('/', function(req, res) {
  var posts = req.params.id;
  res.render(posts);
});

/* GET new Posts */
router.get('/new', function(req, res) {
  res.render('form', { title: 'Express' });
});

/* GET Post by id */
router.get('/:id', function(req, res) {
  var post_by_id = req.params.id;
  res.render(post_by_id);
});

/* GET HTML form for editing a Post */
router.get('/:id/edit', function(req, res) {
  res.render('form_edit', {title: 'Express' });
});

module.exports = router;
