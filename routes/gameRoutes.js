// /routes/gameRoutes.js
const express = require('express');
const Game = require('../models/game');
const Review = require('../models/review');
const router = express.Router();

router.post('/add-game', async (req, res) => {
    const { title, description, genre, release_date } = req.body;
    await Game.addGame(title, description, genre, release_date);
    res.redirect('/games');
});

router.post('/add-review', async (req, res) => {
    const { game_id, user_id, review, rating } = req.body;
    await Review.addReview(game_id, user_id, review, rating);
    res.redirect(`/game/${game_id}`);
});

module.exports = router;
