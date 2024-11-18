const express = require('express');
const app = express();
const port = 8080;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Define a route to render the home page
app.get('/', (req, res) => {
    res.render('home', { title: 'Home' });
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
