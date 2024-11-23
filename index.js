import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { promises as fs } from 'fs'; // Use fs to read the file

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));

app.use(express.static(join(__dirname, 'public')));

// Function to read JSON data
const readData = async () => {
    const data = await fs.readFile('./data.json', 'utf-8');
    return JSON.parse(data);
};

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

app.get('/ig/:username', async (req, res) => {
    const { username } = req.params;
    console.log(`Searching for user: ${username}`); // Log the username being searched

    try {
        const instaData = await readData();
        console.log('Available users:', instaData.map(u => u.username)); // Log available usernames

        const user = instaData.find(u => u.username === username);

        if (user) {
            res.render('instagram', { title: user.username, user });
        } else {
            res.status(404).render('error', { title: 'User Not Found', username });
        }
    } catch (error) {
        console.error('Error reading data:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
