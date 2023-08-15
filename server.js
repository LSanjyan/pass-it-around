const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to the Beer Countdown App</h1>
    <p><a href="/countdown/99">Start the Countdown</a></p>
  `);
});

app.get('/countdown/:number', (req, res) => {
    const bottlesLeft = parseInt(req.params.number);
  
    if (bottlesLeft === 0) {
      res.send("No more bottles of beer on the wall.");
    } else {
      const nextBottles = bottlesLeft - 1;
      res.send(`
        <h2>${bottlesLeft} Bottles of beer on the wall</h2>
        <p><a href="/countdown/${nextBottles}">Take one down, pass it around</a></p>
      `);
    }
  });
  
app.listen(3001, () => {
  console.log('Listening on port 3001');
});