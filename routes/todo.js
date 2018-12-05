var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var todo = require('../models/todo.js');

/* GET ALL Todo */
router.get('/', function(req, res, next) {
  todo.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Todo BY ID */
router.get('/:id', function(req, res, next) {
  todo.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Todo */
router.post('/', function(req, res, next) {
  todo.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Todo */
router.put('/:id', function(req, res, next) {
  todo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Todo */
router.delete('/:id', function(req, res, next) {
  todo.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;