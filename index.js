const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home', { title: 'Home' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/rollDice', (req, res) => {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    res.render('rollDice', { title: 'Roll Dice', diceValue });
});

app.get('/ig/:username', (req, res) => {
    const instaData = require('./data.json');
    const username = req.params.username;
    const user = instaData[username];

    if (user) {
        res.render('instagram', user);
    } else {
        res.send('User not found');
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
