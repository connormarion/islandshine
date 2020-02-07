const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { res.render('index', {title: "Home"}) });
router.get('/contact', (req, res) => { res.render('contact', {title: "Contact"}) });
router.get('/services', (req, res) => { res.render('services', {title: "Our Services"}) });
router.get('/portfolio', (req, res) => { res.render('portfolio', {title: "Portfolio"}) });
router.get('/about', (req, res) => { res.render('about', {title: "About"}) });
module.exports = router;