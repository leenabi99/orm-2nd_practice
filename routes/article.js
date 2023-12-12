
const express = require('express');
const router = express.Router();

router.get('/list', (req, res) => {
  res.render('article/list');
});

router.get('/create', (req, res) => {
  res.render('article/create');
});

router.post('/create', (req, res) => {

  res.redirect('/article/list');
});

router.get('/modify', (req, res) => {
  res.render('article/modify');
});

router.post('/modify', (req, res) => {

  res.redirect('/article/list');
});

router.get('/delete', (req, res) => {

  res.redirect('/article/list');
});

module.exports = router;
