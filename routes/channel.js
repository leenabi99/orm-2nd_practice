
const express = require('express');
const router = express.Router();

router.get('/list', (req, res) => {
  res.render('channel/list');
});

router.get('/create', (req, res) => {
  res.render('channel/create');
});

router.post('/create', (req, res) => {

  res.redirect('/channel/list');
});


router.get('/modify', (req, res) => {
  res.render('channel/modify');
});

router.post('/modify', (req, res) => {

  res.redirect('/channel/list');
});

router.get('/delete', (req, res) => {

  res.redirect('/channel/list');
});

module.exports = router;
