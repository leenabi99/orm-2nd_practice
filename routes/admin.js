
const express = require('express');
const router = express.Router();

router.get('/list', (req, res) => {
  res.render('admin/list');
});

router.get('/create', (req, res) => {
  res.render('admin/create');
});

router.post('/create', (req, res) => {

  res.redirect('/admin/list');
});

router.get('/modify', (req, res) => {
  res.render('admin/modify');
});

router.post('/modify', (req, res) => {

  res.redirect('/admin/list');
});

router.get('/delete', (req, res) => {

  res.redirect('/admin/list');
});

module.exports = router;
