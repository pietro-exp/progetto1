// /routes/authRoutes.js
const express = require('express');
const passport = require('passport');
const User = require('../models/user');
const router = express.Router();

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}));

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        await User.createUser(username, password);  // Crea un nuovo utente
        res.redirect('/login');
    } catch (err) {
        res.status(500).send('Errore nella registrazione');
    }
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;
