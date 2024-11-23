import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import instaData from './data.json' assert { type: "json" };

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));

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
    const { username } = req.params;
    const user = instaData.find(u => u.username === username);

    if (user) {
        res.render('instagram.ejs', { title: user.username, user });
    } else {
        res.status(404).render('error.ejs', { title: 'User Not Found', username });
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

