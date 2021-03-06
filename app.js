const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/cards', (req, res) => {
  res.render('cards', {prompt: "Who is buried in Grant's tomb?"});
});

app.listen(3000, () => {
  console.log('server running on port 3000');
});
